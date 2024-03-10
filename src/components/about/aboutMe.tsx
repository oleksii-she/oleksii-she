import { PortableText } from "@portabletext/react";
import { Image } from "next/dist/client/image-component";
import { IAbout } from "@/types/types";
import { Locale } from "../../../i18n.config";
import styles from "./aboutMe.module.scss";
export const AboutMe = ({ about, lang }: { about: IAbout; lang: Locale }) => {
  return (
    <div className={styles.about}>
      <div>
        <div className={styles["about__title-wrapper"]}>
          {<h2>{lang === "uk" ? about.section?.uk : about.section?.en}</h2>}
        </div>
        <div className={styles["about__description-wrapper"]}>
          <span>{"<p>"}</span>
          <div className={styles["about__description"]}>
            <PortableText
              value={
                lang === "uk" ? about.description.uk : about.description.en
              }
            />
          </div>
          <span>{"</p>"}</span>
        </div>
      </div>
      <div>
        <Image
          src={`${about.image}`}
          className={styles.image}
          alt="about"
          width={462}
          height={555}
        />
      </div>
    </div>
  );
};
