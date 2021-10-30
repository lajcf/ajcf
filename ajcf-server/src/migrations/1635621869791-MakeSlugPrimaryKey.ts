import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeSlugPrimaryKey1635621869791 implements MigrationInterface {
  name = "MakeSlugPrimaryKey1635621869791";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP FOREIGN KEY \`FK_2afe3fc8726ef01dd3d81678b92\``);
    await queryRunner.query(`DROP INDEX \`FK_1bd31d4424e329236a36569e2e5\` ON \`Activity\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` CHANGE \`eventId\` \`eventSlug\` bigint NULL`);
    await queryRunner.query(`ALTER TABLE \`Event\` DROP PRIMARY KEY`);
    await queryRunner.query(`ALTER TABLE \`Event\` ADD PRIMARY KEY (\`slug\`)`);
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP COLUMN \`eventSlug\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` ADD \`eventSlug\` varchar(255) NULL`);
    await queryRunner.query(
      `ALTER TABLE \`Ticket\` ADD CONSTRAINT \`FK_22bce7bf058856be4d64707ed62\` FOREIGN KEY (\`eventSlug\`) REFERENCES \`Event\`(\`slug\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP FOREIGN KEY \`FK_22bce7bf058856be4d64707ed62\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` DROP COLUMN \`eventSlug\``);
    await queryRunner.query(`ALTER TABLE \`Ticket\` ADD \`eventSlug\` bigint NULL`);
    await queryRunner.query(`ALTER TABLE \`Event\` DROP PRIMARY KEY`);
    await queryRunner.query(`ALTER TABLE \`Event\` ADD PRIMARY KEY (\`id\`)`);
    await queryRunner.query(`ALTER TABLE \`Ticket\` CHANGE \`eventSlug\` \`eventId\` bigint NULL`);
    await queryRunner.query(`CREATE INDEX \`FK_1bd31d4424e329236a36569e2e5\` ON \`Activity\` (\`member_id\`)`);
    await queryRunner.query(
      `ALTER TABLE \`Ticket\` ADD CONSTRAINT \`FK_2afe3fc8726ef01dd3d81678b92\` FOREIGN KEY (\`eventId\`) REFERENCES \`Event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
