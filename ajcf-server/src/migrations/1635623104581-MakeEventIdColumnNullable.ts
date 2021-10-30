import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeEventIdColumnNullable1635623104581 implements MigrationInterface {
  name = "MakeEventIdColumnNullable1635623104581";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Event\` CHANGE \`id\` \`id\` bigint NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Event\` CHANGE \`id\` \`id\` bigint NOT NULL`);
  }
}
