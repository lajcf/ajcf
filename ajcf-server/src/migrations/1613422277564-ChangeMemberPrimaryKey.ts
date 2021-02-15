import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeMemberPrimaryKey1613422277564 implements MigrationInterface {
  name = "ChangeMemberPrimaryKey1613422277564";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
    await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `id`", undefined);
    await queryRunner.query("ALTER TABLE `Member` ADD `id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST");
    await queryRunner.query("CREATE UNIQUE INDEX `unicity_on_email_first_name` ON `Member` (`email`, `first_name`)");
    await queryRunner.query("ALTER TABLE `Event` CHANGE `funding` `funding` float NOT NULL", undefined);
    await queryRunner.query("ALTER TABLE `Ticket` CHANGE `amount` `amount` double NOT NULL", undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `Ticket` CHANGE `amount` `amount` double(22) NOT NULL", undefined);
    await queryRunner.query("ALTER TABLE `Event` CHANGE `funding` `funding` float(12) NOT NULL", undefined);

    await queryRunner.query("DROP INDEX `unicity_on_email_first_name` ON `Member`");
    await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY");
    await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `id`", undefined);

    await queryRunner.query("ALTER TABLE `Member` ADD `id` bigint NOT NULL", undefined);
    await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`id`)", undefined);
  }
}
