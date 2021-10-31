import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHelloAssoNotificationEntity1635675614385 implements MigrationInterface {
  name = "AddHelloAssoNotificationEntity1635675614385";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`HelloAssoNotification\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`id\` bigint NOT NULL AUTO_INCREMENT, \`data\` json NOT NULL, \`notification_type\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`HelloAssoNotification\``);
  }
}
