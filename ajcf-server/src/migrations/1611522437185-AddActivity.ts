import { MigrationInterface, QueryRunner } from "typeorm";

export class AddActivity1611522437185 implements MigrationInterface {
  name = "AddActivity1611522437185";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `Activity` (`id` bigint NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `header` varchar(255) NOT NULL, `member_id` bigint NOT NULL, PRIMARY KEY (`id`, `header`)) ENGINE=InnoDB",
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE `Activity`", undefined);
  }
}
