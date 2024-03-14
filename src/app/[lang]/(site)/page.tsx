import Image from "next/image";
import Link from "next/link";
import {
  getHero,
  getProfile,
  getAboutMe,
  getSkillsTitle,
  getSkills,
} from "../../../../sanity/schemas/utils";
import { IAbout, IHero, IProfile, ISkills, ISkillsTitle } from "@/types/types";
import { Locale } from "../../../../i18n.config";
import { Profile } from "@/components/profile/Profile";
import { Hero } from "@/components/hero/hero";
import styles from "./page.module.scss";
import { getDictionary } from "@/lib/dictonary";
import { AboutMe } from "@/components/about/aboutMe";
import { ScrollIcon, ScrollBottomIcon, SkillsIcon } from "@/components/icons";
import { SkillsList } from "@/components/skills/skillsList";
import { FormSendMessage } from "@/components/form/formSendMessage";
export const revalidate = 20;

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    hero: heroContents,
    skills,
    contact,
    message,
  } = await getDictionary(lang);
  const hero: IHero[] = await getHero();
  const profile: IProfile[] = await getProfile();
  const about: IAbout[] = await getAboutMe();
  const skillsTitle: ISkillsTitle[] = await getSkillsTitle();
  const resSkills: ISkills[] = await getSkills();

  return (
    <main>
      <section className={styles["section-hero"]}>
        {hero[0] && (
          <h2 className={styles.title}>
            {lang === "uk" ? hero[0].section?.uk : hero[0].section?.en}
          </h2>
        )}

        <div className="container mx-auto px-6">
          <div className={styles["section-hero__wrapper"]}>
            <div className={styles["profile"]}>
              {profile[0] && <Profile profileObj={profile[0]} lang={lang} />}
            </div>
            <div className={styles["hero-box"]}>
              {hero[0] && (
                <Hero
                  heroObj={hero[0]}
                  lang={lang}
                  letsTalks={heroContents.button}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {about[0] && (
        <section className={styles["section-about"]}>
          <div className={styles["icon-wrapper"]}>
            <div>
              <ScrollIcon className="" />

              <ScrollBottomIcon
                className={styles["icon-wrapper__icon-bottom-scroll"]}
              />
            </div>
          </div>
          <div className="container mx-auto px-6">
            <AboutMe about={about[0]} lang={lang} />
          </div>
        </section>
      )}
      <section className={styles["section-skills"]}>
        <div className={`${styles["icon-wrapper"]} ${styles["margin64"]}`}>
          <div>
            <ScrollIcon className="" />

            <ScrollBottomIcon
              className={styles["icon-wrapper__icon-bottom-scroll"]}
            />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className={styles.skills}>
            <div className={`${styles["skills__title-wrapper"]}`}>
              <h2>{skills.title}</h2>

              {skillsTitle[0].title && (
                <p>
                  {lang === "uk"
                    ? skillsTitle[0].title.uk
                    : skillsTitle[0].title.en}
                </p>
              )}
            </div>
            <div className={styles.skillsWrapper}>
              {resSkills && <SkillsList list={resSkills} />}
            </div>
          </div>
        </div>
      </section>
      <section className={styles["section-contact"]} id="contacts">
        <div className={`${styles["icon-wrapper"]} ${styles["margin64"]}`}>
          <div>
            <ScrollIcon className="" />

            <ScrollBottomIcon
              className={styles["icon-wrapper__icon-bottom-scroll"]}
            />
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div
            className={`${styles["skills__title-wrapper"]} ${styles["contacts-title-wrapper"]}`}
          >
            <h2>{contact.contact}</h2>

            <p>{contact.desc}</p>
          </div>
          <FormSendMessage content={contact} errorSubmit={message} />
        </div>
      </section>
    </main>
  );
}
