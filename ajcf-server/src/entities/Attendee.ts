import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Ticket } from "./Ticket";

@Entity("Attendee")
export class Attendee extends BaseEntity {
  @PrimaryColumn("varchar", {
    name: "email",
  })
  email: string;

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

  @Column("varchar", {
    name: "first_name",
    nullable: true,
  })
  firstName: string | null;

  @Column("varchar", {
    name: "last_name",
    nullable: true,
  })
  lastName: string | null;

  @Column("date", {
    name: "last_participation_date",
  })
  lastParticipationDate: Date;

  @OneToMany(() => Ticket, (ticket) => ticket.attendee)
  tickets: Ticket[];

  @Column("varchar", {
    name: "mailjet_contact_id",
    nullable: true,
  })
  mailjetContactId: string | null;
}
