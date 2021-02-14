import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

export abstract class AjcfBaseEntity {
  @PrimaryColumn({
    name: "id",
    type: "bigint",
  })
  id: string;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp",
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
  })
  updatedAt: Date;
}
