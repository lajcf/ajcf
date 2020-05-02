import { MigrationInterface, QueryRunner } from "typeorm";

export class AddWelcomeMailSentToMember1588018165817
  implements MigrationInterface {
  name = "AddWelcomeMailSentToMember1588018165817";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `Member` ADD `welcome_mail_sent` tinyint NOT NULL DEFAULT 0",
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `Member` DROP COLUMN `welcome_mail_sent`",
      undefined
    );
  }
}
