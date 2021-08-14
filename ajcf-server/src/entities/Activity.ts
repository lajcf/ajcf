import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ActivityHeader } from "../constants";

@Entity("Activity")
export class Activity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
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

  @PrimaryColumn("varchar", {
    name: "header",
  })
  header: ActivityHeader;

  @Column("bigint", {
    name: "member_id",
  })
  memberId: string;
}
