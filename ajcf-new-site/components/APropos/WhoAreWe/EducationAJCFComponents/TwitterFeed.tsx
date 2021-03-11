import React from "react";
import styles from "./EducationAJCF.module.scss";
import { dayjs } from "../../../../lib/utils/dayjs";

const educationTweets = [
  {
    title: "Tweet01",
    date: new Date(2020, 9, 23),
    content:
      "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Mea aeterno eleifend antiopam ad.",
  },
  {
    title: "Tweet02",
    date: new Date(2020, 9, 26),
    content:
      "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Mea aeterno eleifend antiopam ad.",
  },
];

export const TwitterFeed = () => {
  return (
    <section className={styles.twitterFeedSection}>
      <h3>Fil Twitter @ajcf_fr</h3>
      <ul>
        {educationTweets.map((tweet) => (
          <li key={tweet.title}>
            <h4>{tweet.title}</h4>
            <h4>{dayjs(tweet.date).format("DD.MM.YY")}</h4>
            <p className="texte1">{tweet.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
