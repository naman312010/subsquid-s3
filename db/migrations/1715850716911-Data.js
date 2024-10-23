module.exports = class Data1715850716911 {
    name = 'Data1715850716911'

    async up(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "symbol"`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "total_supply"`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "decimals"`)
        await db.query(`ALTER TABLE "transfer" DROP COLUMN "amount"`)
        await db.query(`ALTER TABLE "token" ADD "description" text`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "name" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" ADD "symbol" text NOT NULL`)
        await db.query(`ALTER TABLE "token" ADD "total_supply" numeric NOT NULL`)
        await db.query(`ALTER TABLE "token" ADD "decimals" integer NOT NULL`)
        await db.query(`ALTER TABLE "transfer" ADD "amount" numeric NOT NULL`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "description"`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "name" SET NOT NULL`)
    }
}
