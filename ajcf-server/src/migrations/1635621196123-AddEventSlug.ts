import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEventSlug1635621196123 implements MigrationInterface {
  name = "AddEventSlug1635621196123";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Activity\` DROP FOREIGN KEY \`FK_1bd31d4424e329236a36569e2e5\``);
    await queryRunner.query(`ALTER TABLE \`Event\` ADD \`slug\` varchar(255) NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Event\` DROP COLUMN \`slug\``);
    await queryRunner.query(
      `ALTER TABLE \`Activity\` ADD CONSTRAINT \`FK_1bd31d4424e329236a36569e2e5\` FOREIGN KEY (\`member_id\`) REFERENCES \`Member\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
