import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { IPortfolio } from "@/types/types";
import { getPortfolioId } from "../../../../../../sanity/schemas/utils";
import styles from "./styles.module.scss";
import { Locale } from "../../../../../../i18n.config";
import { GitHubIcon } from "@/components/icons";
const PortfolioId = async ({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) => {
  const portfolio: IPortfolio[] = await getPortfolioId(id);
  console.log(portfolio, "portfolio");

  console.log(portfolio[0], "portfolio[0]");

  return (
    <main>
      <article className={styles.portfolio}>
        <div className="container mx-auto px-6">
          <h2>
            {lang === "uk" ? portfolio[0]?.title.uk : portfolio[0]?.title.en}
          </h2>
          <div>
            <Image
              src={portfolio[0].image}
              width={450}
              height={450}
              alt={"dsa"}
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
