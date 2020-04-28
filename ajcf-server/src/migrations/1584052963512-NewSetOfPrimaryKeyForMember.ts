import { MigrationInterface, QueryRunner } from "typeorm";

export class NewSetOfPrimaryKeyForMember1584052963512 implements MigrationInterface {
    name = 'NewSetOfPrimaryKeyForMember1584052963512'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `hello_asso_id`", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`id`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`id`, `email`)", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD `hello_asso_id` varchar(255) NOT NULL", undefined);
    }

}
