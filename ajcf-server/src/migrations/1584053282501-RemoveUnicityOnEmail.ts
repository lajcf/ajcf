import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUnicityOnEmail1584053282501 implements MigrationInterface {
    name = 'RemoveUnicityOnEmail1584053282501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_9cc50bc474e863541dfe05cbbc` ON `Member`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_9cc50bc474e863541dfe05cbbc` ON `Member` (`email`)", undefined);
    }

}
