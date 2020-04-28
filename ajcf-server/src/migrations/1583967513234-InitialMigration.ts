import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1583967513234 implements MigrationInterface {
    name = 'InitialMigration1583967513234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Member` (`id` bigint NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `email` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `hello_asso_id` varchar(255) NOT NULL, `birth_date` date NULL, `phone` varchar(255) NULL, `motivation` text NULL, `first_subscription_date` date NOT NULL, `last_subscription_date` date NOT NULL, UNIQUE INDEX `IDX_9cc50bc474e863541dfe05cbbc` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_9cc50bc474e863541dfe05cbbc` ON `Member`", undefined);
        await queryRunner.query("DROP TABLE `Member`", undefined);
    }

}
