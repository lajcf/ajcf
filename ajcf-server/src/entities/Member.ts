import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { AjcfBaseEntity } from "./AjcfBaseEntity";
import { Activity } from "./Activity";

@Entity("Member")
@Unique("unicity_on_email_first_name", ["email", "firstName"])
export class Member extends AjcfBaseEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
  })
  id: string;

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

  @OneToMany(() => Activity, (activity) => activity.member)
  activities: Activity[];
}
