"use client";
import Link from "next/dist/client/link";
import { PortableText } from "@portabletext/react";
import { IHero } from "@/types/types";
import styles from "./hero.module.scss";
import { Locale } from "../../../i18n.config";
import { MailIcon } from "../icons";
export const Hero = ({
  heroObj,
  lang,
  letsTalks,
}: {
  heroObj: IHero;
  lang: Locale;
  letsTalks: string;
}) => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero__title-wrapper"]}>
        <p>{"<h1>"}</p>
        <PortableText
          value={lang === "uk" ? heroObj.title?.uk : heroObj.title?.en}
        />
        <p>{"</h1>"}</p>
      </div>

      <div className={styles["hero__text-wrapper"]}>
        <span>{"<p>"}</span>
        <p>
          {lang === "uk" ? heroObj.description?.uk : heroObj.description?.en}
        </p>
        <span>{"</p>"}</span>
      </div>
      <div className={styles["hero__lets-talks"]}>
        <Link href="#contacts">
          <span>{letsTalks}</span>
        </Link>
        <div className={styles["hero__icon-wrapper"]}>
          <MailIcon className="" />
        </div>
      </div>
    </div>
  );
};
