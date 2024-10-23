# (Experimental) ERC721 indexing + reading metadata elements from S3

A squid template indexing ERC721 transfers. The squid fetches the historical `Transfer` event, decodes and persists to a `Transfer` table. A new entry is created in the `Account` table for each address that has interacted with the contract so that one can query the transfer history for each EVM address. the tokens are saved and their metadata elements are read from S3 bucket metada file (if present) and added to collected data as well. (schema incomplete as of now)

Dependencies: NodeJS v16 or newer, Git, Docker.

## Setup

- Install Squid CLI:

```bash
npm i -g @subsquid/cli
```

- Update the `CONTRACT_ADDRESS` and `CONTRACT_DEPLOYED_AT` (starting block) in `.env`.
- Set the `RPC_ENDPOINT` env variable to a chain node RPC URL.
- Set AWS_REGION,AWS_ACCESS_KEY,AWS_SECRET_ACCESS_KEY of the s3 bucket from where metadata will be read

## Run

```bash
npm ci

# in case made changes to schema
sqd typegen

# in case need to remake 'sqd up' script
sqd migration

# start a local Postgres
sqd up

# in case made changes to processor/main
sqd codegen

# build the squid
sqd build

# start both the squid processor and the GraphQL server
sqd run .

```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

You can also start squid services one by one:
```bash
sqd process
sqd serve
```
