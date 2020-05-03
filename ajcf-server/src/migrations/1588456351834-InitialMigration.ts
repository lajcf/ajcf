import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1588456351834 implements MigrationInterface {
    name = 'InitialMigration1588456351834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_9cc50bc474e863541dfe05cbbc` ON `Member`", undefined);
        await queryRunner.query("CREATE TABLE `Event` (`id` bigint NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `funding` float NOT NULL, `supporters` int NOT NULL, `place_name` varchar(255) NULL, `place_address` varchar(255) NULL, `place_city` varchar(255) NULL, `place_zipcode` varchar(255) NULL, `place_country` varchar(255) NULL, `start_date` date NOT NULL, `end_date` date NOT NULL, `creation_date` timestamp NOT NULL, `last_update_on_hello_asso` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD `welcome_mail_sent` tinyint NOT NULL DEFAULT 0", undefined);
        await queryRunner.query("ALTER TABLE `Member` CHANGE `id` `id` bigint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`email`)", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `id`", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD `id` bigint NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`email`, `id`)", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`id`)", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`email`, `id`)", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`email`)", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `id`", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD `id` bigint NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP PRIMARY KEY", undefined);
        await queryRunner.query("ALTER TABLE `Member` ADD PRIMARY KEY (`id`, `email`)", undefined);
        await queryRunner.query("ALTER TABLE `Member` CHANGE `id` `id` bigint NOT NULL AUTO_INCREMENT", undefined);
        await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `welcome_mail_sent`", undefined);
        await queryRunner.query("DROP TABLE `Event`", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_9cc50bc474e863541dfe05cbbc` ON `Member` (`email`)", undefined);
    }

}
