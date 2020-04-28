import { MigrationInterface, QueryRunner } from "typeorm";

export class AddActiveMemberColumn1584046157362 implements MigrationInterface {
    name = 'AddActiveMemberColumn1584046157362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Member` ADD `active_member` tinyint NOT NULL DEFAULT 0", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `active_member`", undefined);
    }

}
