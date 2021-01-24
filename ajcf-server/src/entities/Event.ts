import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { AjcfBaseEntity } from "./AjcfBaseEntity";
import { Ticket } from "./Ticket";

// TODO: ajouter id du pole
@Entity("Event")
export class Event extends AjcfBaseEntity {
  @PrimaryColumn({
    name: "id",
    type: "bigint",
  })
  id: string;

  @Column("varchar", {
    name: "name",
  })
  name: string;

  @Column("float", {
    name: "funding",
    nullable: false,
  })
  funding: number;

  @Column("integer", {
    name: "supporters",
  })
  supporters: number;

  @Column("varchar", {
    name: "place_name",
    nullable: true,
  })
  placeName: string | null;

  @Column("varchar", {
    name: "place_address",
    nullable: true,
  })
  placeAddress: string | null;

  @Column("varchar", {
    name: "place_city",
    nullable: true,
  })
  placeCity: string | null;

  @Column("varchar", {
    name: "place_zipcode",
    nullable: true,
  })
  placeZipcode: string | null;

  @Column("varchar", {
    name: "place_country",
    nullable: true,
  })
  placeCountry: string | null;

  @Column("date", {
    name: "start_date",
  })
  startDate: Date;

  @Column("date", {
    name: "end_date",
  })
  endDate: Date;

  @Column({
    name: "creation_date",
    type: "timestamp",
  })
  creationDate: Date;

  @Column({
    name: "last_update_on_hello_asso",
    type: "timestamp",
  })
  lastUpdateOnHelloAsso: Date;

  @OneToMany(() => Ticket, (ticket) => ticket.event)
  tickets: Ticket[];

  @Column("varchar", {
    name: "mailjet_list_id",
    nullable: true,
  })
  mailjetListId: string | null;
}
