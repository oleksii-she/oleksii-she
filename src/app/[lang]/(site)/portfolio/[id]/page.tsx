import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { IPortfolio } from "@/types/types";
import { getPortfolioId } from "../../../../../../sanity/schemas/utils";
import styles from "./styles.module.scss";
import { Locale } from "../../../../../../i18n.config";
import { GitHubIcon } from "@/components/icons";
import { getPortfolio } from "../../../../../../sanity/schemas/utils";
export async function generateStaticParams() {
  const posts: IPortfolio[] = await getPortfolio();

  return posts.map((el) => ({
    slug: el._id.toString(),
  }));
}
const PortfolioId = async ({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) => {
  const portfolio: IPortfolio[] = await getPortfolioId(id);

  return (
    <main>
      <article className={styles.portfolio}>
        <div className="container mx-auto px-6">
          <h2 className={styles["portfolio__title"]}>
            {lang === "uk" ? portfolio[0]?.title.uk : portfolio[0]?.title.en}
          </h2>
          <div>
            <div>
              <Image
                src={portfolio[0].image}
                width={450}
                height={450}
                alt={
                  lang === "uk"
                    ? portfolio[0]?.title.uk
                    : portfolio[0]?.title.en
                }
              />
              <div className={styles["portfolio__link-box"]}>
                {portfolio[0]?.gitHub && (
                  <Link href={portfolio[0]?.gitHub} target="blank">
                    <GitHubIcon className="" />
                  </Link>
                )}
                <Link href={portfolio[0].link} target="blank">
                  Go to site
                </Link>
              </div>
            </div>
            <div className={styles["portfolio__about"]}>
              <div>
                <p>
                  Роль:
                  {portfolio[0].roles?.map((role) => (
                    <span key={role?._key}>{role?.name}</span>
                  ))}
                </p>
              </div>
              <div>
                <p>
                  Технології:
                  {portfolio[0].libraries?.map((lib) => (
                    <span key={lib?._key}>{lib?.name}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["portfolio__description"]}>
            <PortableText
              value={
                lang === "uk"
                  ? portfolio[0].description?.uk
                  : portfolio[0].description?.en
              }
            />
          </div>
        </div>
      </article>
    </main>
  );
};

export default PortfolioId;
