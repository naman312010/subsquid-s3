import { In } from 'typeorm'
import { TypeormDatabase } from '@subsquid/typeorm-store'
import * as itse from './abi/itse'
import { Account, Token, Transfer } from './model'
import { CONTRACT_ADDRESS, Context, processor } from './processor'
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { assertNotNull } from '@subsquid/util-internal'

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: assertNotNull(process.env.AWS_ACCESS_KEY),
        secretAccessKey: assertNotNull(process.env.AWS_SECRET_ACCESS_KEY),
    },
});


processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
    let transfersData: TransferEventData[] = []

    for (let block of ctx.blocks) {
        for (let log of block.logs) {
            if (log.topics[0] !== itse.events.Transfer.topic) continue

            let event = itse.events.Transfer.decode(log)
            transfersData.push({
                id: log.id,
                blockNumber: block.header.height,
                timestamp: new Date(block.header.timestamp),
                txHash: log.transaction?.hash || '0x',
                from: event.from.toLowerCase(),
                to: event.to.toLowerCase(),
                tokenId: event.tokenId
            })
        }
    }

    await saveTransfers(ctx, transfersData)
})

async function saveTransfers(ctx: Context, transfersData: TransferEventData[]) {
    let accountIds = new Set<string>()
    for (let t of transfersData) {
        accountIds.add(t.from)
        accountIds.add(t.to)
    }

    let accounts = await ctx.store
        .findBy(Account, { id: In([...accountIds]) })
        .then((q) => new Map(q.map((i) => [i.id, i])))

    let transfers: Transfer[] = []



    for (let t of transfersData) {
        let { id, blockNumber, timestamp, txHash, tokenId } = t

        let from = getAccount(accounts, t.from)
        let to = getAccount(accounts, t.to)

        let token = await ctx.store.get(Token, tokenId.toString())
        if (token == null) {
            token = await fetchToken(ctx, tokenId.toString())
            await ctx.store.insert(token)
        }

        transfers.push(
            new Transfer({
                id,
                blockNumber,
                timestamp,
                txHash,
                from,
                to,
                token,
            })
        )
    }

    await ctx.store.upsert(Array.from(accounts.values()))
    await ctx.store.insert(transfers)
}

async function fetchToken(ctx: Context, tokenId: string) {
    // let block = ctx.blocks[ctx.blocks.length - 1].header

    // let contract = new itse.Contract(ctx, block, CONTRACT_ADDRESS)

    const key = `${tokenId}.json`
    const bucketName = 'isdb';
    const fileparams = { Bucket: bucketName, Key: key }
    const command = new GetObjectCommand(fileparams)
    let name: string = '', description: string = ''
    let metadata
    try {

        const datax = await s3.send(command);
        if (datax && datax.Body) {
            metadata = JSON.parse(await datax.Body.transformToString())
            name = metadata.name
            description = metadata.description
        }
    }
    catch (err) {
        console.log(err);
    }
    // console.log(name,description)
    return new Token({
        id: tokenId,
        name,
        description
    })





}

interface TransferEventData {
    id: string
    blockNumber: number
    timestamp: Date
    txHash: string
    from: string
    to: string
    tokenId: bigint
}

function getAccount(m: Map<string, Account>, id: string): Account {
    let acc = m.get(id)
    if (acc == null) {
        acc = new Account()
        acc.id = id
        m.set(id, acc)
    }
    return acc
}
