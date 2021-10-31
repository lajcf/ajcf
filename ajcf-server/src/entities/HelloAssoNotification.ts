import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AjcfBaseEntity } from "./AjcfBaseEntity";

@Entity("HelloAssoNotification")
export class HelloAssoNotification extends AjcfBaseEntity {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "bigint",
  })
  id: string;

  @Column("json", {
    name: "data",
  })
  data: object;

  @Column("varchar", {
    name: "notification_type",
  })
  notificationType: "Order" | "Payment" | "Form";
}
