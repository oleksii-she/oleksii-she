import Image from "next/image";
import Link from "next/link";
import { getHero, getProfile } from "../../../../sanity/schemas/utils";
import { IHero, IProfile } from "@/types/types";
import { Locale } from "../../../../i18n.config";
import { Profile } from "@/components/profile/Profile";
import styles from "./page.module.scss";
export const revalidate = 20;

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const hero: IHero[] = await getHero();
  const profile: IProfile[] = await getProfile();

  const heroObj = hero[0];
  // const profileObj = profile[0];

  const Name = heroObj.title?.uk
    ? heroObj.title?.uk.replace("Олексій", "<span>Олексій</span>")
    : "";
  const NameEn = heroObj.title?.en
    ? heroObj.title?.en.replace("Oleksii", "<span>Oleksii</span>")
    : "";

  return (
    <main>
      <section>
        {heroObj && (
          <h2 className={styles.title}>
            {lang === "uk" ? heroObj.section?.uk : heroObj.section?.en}
          </h2>
        )}

        <div className="container mx-auto px-8">
          <div className={styles.hero}>
            {profile[0] && <Profile profileObj={profile[0]} lang={lang} />}
            {heroObj && (
              <div>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: lang === "uk" ? Name : NameEn,
                  }}
                />
              </div>
            )}
            <p>
              {"<p>"}
              {lang === "uk"
                ? heroObj.description?.uk
                : heroObj.description?.en}
              {"</p>"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
