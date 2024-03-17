import Image from "next/image";
import styles from "./portfolio.module.scss";
import { KeyboardIcon } from "@/components/icons";
import { getPortfolio } from "../../../../../sanity/schemas/utils";
import { getPortfolioSection } from "../../../../../sanity/schemas/utils";
import { ISectionPortfolio, IPortfolio } from "@/types/types";
interface IBlogs {
  name: string;
  desc: string;
}

import { PortfolioList } from "@/components/portfolioList/portfolioList";
import { Locale } from "../../../../../i18n.config";

export default async function Portfolio({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  const portfolio = await getPortfolio();

  const portfolioSection: ISectionPortfolio[] = await getPortfolioSection();
  const section: ISectionPortfolio = portfolioSection[0];
  console.log(portfolio.length, "portfolio");

  return (
    <main>
      <section className={styles["portfolio-section"]}>
        <div className="container mx-auto px-6">
          {section && (
            <h2 className={styles.title}>
              {lang === "uk" ? section.section.uk : section.section.en}
            </h2>
          )}
          <div className={styles["box-contents"]}>
            {section && (
              <div className={styles["wrapper-description"]}>
                <p>
                  {lang === "uk"
                    ? section.description.uk
                    : section.description.en}
                </p>
              </div>
            )}
            <KeyboardIcon className={styles["keyboard-icon"]} />
          </div>
          <div className={styles["portfolio-wrapper"]}>
            {portfolio && <PortfolioList lang={lang} portfolio={portfolio} />}
          </div>
        </div>
      </section>
    </main>
  );
}
