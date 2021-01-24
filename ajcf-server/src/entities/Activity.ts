import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ActivityHeader } from "../constants";
import { Member } from "./Member";

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

  @ManyToOne(() => Member, (member) => member.activities)
  member: Member;
}
