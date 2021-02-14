import { Column, Entity, ManyToOne } from "typeorm";
import { AjcfBaseEntity } from "./AjcfBaseEntity";
import { Event } from "./Event";
import { Attendee } from "./Attendee";

@Entity("Ticket")
export class Ticket extends AjcfBaseEntity {
  @ManyToOne(() => Attendee, (attendee) => attendee.tickets)
  attendee: Attendee;

  @ManyToOne(() => Event, (event) => event.tickets)
  event: Event;

  @Column({
    name: "date",
    type: "timestamp",
  })
  date: Date;

  @Column("double", {
    name: "amount",
  })
  amount: number;

  @Column("varchar", {
    name: "ticket_type",
    nullable: true,
  })
  ticketType: string | null;
}
