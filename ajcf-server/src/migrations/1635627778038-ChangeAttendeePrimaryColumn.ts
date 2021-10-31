import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeAttendeePrimaryColumn1635627778038 implements MigrationInterface {
  name = "ChangeAttendeePrimaryColumn1635627778038";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP FOREIGN KEY \`FK_d727a85f9a232dd6d380fa7e6f0\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` CHANGE \`attendeeEmail\` \`attendeeId\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`Attendee\` DROP PRIMARY KEY`);
    await queryRunner.query(
      `ALTER TABLE \`Attendee\` ADD \`id\` bigint NOT NULL AUTO_INCREMENT, ADD PRIMARY KEY (\`id\`)`
    );
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP COLUMN \`attendeeId\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` ADD \`attendeeId\` bigint NULL`);
    await queryRunner.query(
      `CREATE UNIQUE INDEX \`unicity_on_email_first_name\` ON \`Attendee\` (\`email\`, \`first_name\`)`
    );
    await queryRunner.query(
      `ALTER TABLE \`Ticket\` ADD CONSTRAINT \`FK_ab47920f35638a1e409b0b33adf\` FOREIGN KEY (\`attendeeId\`) REFERENCES \`Attendee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP FOREIGN KEY \`FK_ab47920f35638a1e409b0b33adf\``);
    await queryRunner.query(`DROP INDEX \`unicity_on_email_first_name\` ON \`Attendee\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP COLUMN \`attendeeId\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` ADD \`attendeeId\` varchar(255) NULL`);
    await queryRunner.query(`ALTER TABLE \`Attendee\` ADD PRIMARY KEY (\`email\`)`);
    await queryRunner.query(`ALTER TABLE \`Attendee\` DROP COLUMN \`id\``);
    await queryRunner.query(`ALTER TABLE \`Attendee\` DROP PRIMARY KEY`);
    await queryRunner.query(`ALTER TABLE \`Ticket\` CHANGE \`attendeeId\` \`attendeeEmail\` varchar(255) NULL`);
    await queryRunner.query(
      `ALTER TABLE \`Ticket\` ADD CONSTRAINT \`FK_d727a85f9a232dd6d380fa7e6f0\` FOREIGN KEY (\`attendeeEmail\`) REFERENCES \`Attendee\`(\`email\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
