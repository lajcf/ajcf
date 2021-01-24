import { MigrationInterface, QueryRunner } from "typeorm";

export class AddActivityToMemberRelation1611523030188 implements MigrationInterface {
  name = "AddActivityToMemberRelation1611523030188";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `Activity` ADD CONSTRAINT `FK_1bd31d4424e329236a36569e2e5` FOREIGN KEY (`member_id`) REFERENCES `Member`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION",
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `Activity` DROP FOREIGN KEY `FK_1bd31d4424e329236a36569e2e5`", undefined);
  }
}
