import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeEmailToPrimaryColumn1584051940115
  implements MigrationInterface {
  name = "ChangeEmailToPrimaryColumn1584051940115";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `Member` CHANGE `id` `id` bigint NOT NULL",
      undefined
    );
    await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
    await queryRunner.query(
      "ALTER TABLE `Member` ADD PRIMARY KEY (`id`, `email`)",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `Member` CHANGE `id` `id` bigint NOT NULL AUTO_INCREMENT",
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `Member` CHANGE `id` `id` bigint NOT NULL",
      undefined
    );
    await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
    await queryRunner.query(
      "ALTER TABLE `Member` ADD PRIMARY KEY (`id`)",
      undefined
    );
    await queryRunner.query(
      "ALTER TABLE `Member` CHANGE `id` `id` bigint NOT NULL AUTO_INCREMENT",
      undefined
    );
  }
}
