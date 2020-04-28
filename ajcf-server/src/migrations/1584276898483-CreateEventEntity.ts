import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEventEntity1584276898483 implements MigrationInterface {
    name = 'CreateEventEntity1584276898483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Event` (`id` bigint NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `funding` float NOT NULL, `supporters` int NOT NULL, `place_name` varchar(255) NULL, `place_address` varchar(255) NULL, `place_city` varchar(255) NULL, `place_zipcode` varchar(255) NULL, `place_country` varchar(255) NULL, `start_date` date NOT NULL, `end_date` date NOT NULL, `creation_date` timestamp NOT NULL, `last_update_on_hello_asso` timestamp NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `Event`", undefined);
    }

}
