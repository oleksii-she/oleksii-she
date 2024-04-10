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
  cv,
}: {
  heroObj: IHero;
  lang: Locale;
  letsTalks: string;
  cv: string;
}) => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero__title-wrapper"]}>
        <PortableText
          value={lang === "uk" ? heroObj.title?.uk : heroObj.title?.en}
        />
      </div>

      <div className={styles["hero__text-wrapper"]}>
        <span>{"<p>"}</span>
        <p>
          {lang === "uk" ? heroObj.description?.uk : heroObj.description?.en}
        </p>
        <span>{"</p>"}</span>
      </div>
      <div className={styles["hero__box-link"]}>
        <div className={styles["hero__lets-talks"]}>
          <Link href="#contacts">
            <span>{letsTalks}</span>
            <div className={styles["hero__icon-wrapper"]}>
              <MailIcon className="" />
            </div>
          </Link>
        </div>
        <Link href={cv} className={styles["hero__link-cv"]}>
          <span>{lang === "uk" ? "Завантажити CV" : "Download CV"}</span>
        </Link>
      </div>
    </div>
  );
};
