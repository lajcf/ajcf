import React from "react";
import Link from "next/link";
import styles from "../Footer.module.scss";

type LinkItem = {
  name: string;
  link: string;
  listHead?: boolean;
};

const projetsAJCFLinks: LinkItem[] = [
  {
    name: "Nos projets",
    link: "/projets-ajcf",
    listHead: true,
  },
  {
    name: "Espaces",
    link: "/projets-ajcf/nos-espaces",
  },
  {
    name: "Antennes",
    link: "/projets-ajcf/nos-antennes",
  },
  {
    name: "Éducation",
    link: "projets-ajcf/education-ajcf",
  },
];

const aideLinks: LinkItem[] = [
  {
    name: "Aide",
    link: "",
    listHead: true,
  },
  {
    name: "FAQ",
    link: "",
  },
  {
    name: "Recrutement",
    link: "/projets-ajcf/recrutement",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const LinksList = ({ linksArray }: { linksArray: LinkItem[] }) => {
  return (
    <ul>
      {linksArray.map((link) => (
        <li key={link.name}>
          <Link href={link.link}>
            <a>{link.listHead ? <h3>{link.name}</h3> : <h5>{link.name}</h5>}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const InternalLinks = () => {
  return (
    <div className={styles.internalLinks}>
      <LinksList linksArray={projetsAJCFLinks} />
      <LinksList linksArray={aideLinks} />
    </div>
  );
};
