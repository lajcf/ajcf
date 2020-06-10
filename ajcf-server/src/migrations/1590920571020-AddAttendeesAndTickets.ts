import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAttendeesAndTickets1590920571020 implements MigrationInterface {
    name = 'AddAttendeesAndTickets1590920571020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Ticket` (`id` bigint NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `date` timestamp NOT NULL, `amount` double NOT NULL, `ticket_type` varchar(255) NULL, `attendeeEmail` varchar(255) NULL, `eventId` bigint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `Attendee` (`email` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `first_name` varchar(255) NULL, `last_name` varchar(255) NULL, `last_participation_date` date NOT NULL, `mailjet_contact_id` varchar(255) NULL, PRIMARY KEY (`email`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `Event` ADD `mailjet_list_id` varchar(255) NULL", undefined);
        await queryRunner.query("ALTER TABLE `Event` CHANGE `funding` `funding` float NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `Ticket` ADD CONSTRAINT `FK_d727a85f9a232dd6d380fa7e6f0` FOREIGN KEY (`attendeeEmail`) REFERENCES `Attendee`(`email`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `Ticket` ADD CONSTRAINT `FK_2afe3fc8726ef01dd3d81678b92` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Ticket` DROP FOREIGN KEY `FK_2afe3fc8726ef01dd3d81678b92`", undefined);
        await queryRunner.query("ALTER TABLE `Ticket` DROP FOREIGN KEY `FK_d727a85f9a232dd6d380fa7e6f0`", undefined);
        await queryRunner.query("ALTER TABLE `Event` CHANGE `funding` `funding` float(12) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `Event` DROP COLUMN `mailjet_list_id`", undefined);
        await queryRunner.query("DROP TABLE `Attendee`", undefined);
        await queryRunner.query("DROP TABLE `Ticket`", undefined);
    }

}
