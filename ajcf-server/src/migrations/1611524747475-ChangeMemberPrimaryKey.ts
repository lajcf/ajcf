import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeMemberPrimaryKey1611524747475 implements MigrationInterface {
  name = "ChangeMemberPrimaryKey1611524747475";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
    await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `id`", undefined);
    await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`email`, `first_name`, `last_name`)", undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
    await queryRunner.query("ALTER TABLE `Member` ADD `id` bigint NOT NULL", undefined);
    await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`id`)", undefined);
  }
}
