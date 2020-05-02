import { Column, Entity } from "typeorm";
import { HelloAssoBaseEntity } from "./AjcfBaseEntity";

@Entity("Member")
export class Member extends HelloAssoBaseEntity {
  @Column("varchar", {
    name: "email",
  })
  email: string;

  @Column("varchar", {
    name: "first_name",
  })
  firstName: string;

  @Column("varchar", {
    name: "last_name",
  })
  lastName: string;

  @Column("date", {
    name: "birth_date",
    nullable: true,
  })
  birthDate: Date | null;

  @Column("varchar", {
    name: "phone",
    nullable: true,
  })
  phone: string | null;

  @Column("varchar", {
    name: "job_study",
    nullable: true,
  })
  jobStudy: string | null;

  @Column("text", {
    name: "motivation",
    nullable: true,
  })
  motivation: string | null;

  @Column("date", {
    name: "first_subscription_date",
  })
  firstSubscriptionDate: Date;

  @Column("date", {
    name: "last_subscription_date",
  })
  lastSubscriptionDate: Date;

  @Column("boolean", {
    name: "active_member",
    default: false,
  })
  activeMember: boolean;

  @Column("boolean", {
    name: "welcome_mail_sent",
    default: false,
  })
  welcomeMailSent: boolean;
}
