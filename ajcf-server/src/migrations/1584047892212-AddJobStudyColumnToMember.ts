import { MigrationInterface, QueryRunner } from "typeorm";

export class AddJobStudyColumnToMember1584047892212 implements MigrationInterface {
  name = "AddJobStudyColumnToMember1584047892212";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `Member` ADD `job_study` varchar(255) NULL", undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE `Member` DROP COLUMN `job_study`", undefined);
  }
}
