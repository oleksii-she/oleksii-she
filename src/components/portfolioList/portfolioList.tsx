import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import styles from "./styles.module.scss";
import { IPortfolio } from "@/types/types";
import { Locale } from "../../../i18n.config";
export const PortfolioList = ({
  portfolio,
  lang,
}: {
  portfolio: IPortfolio[];
  lang: Locale;
}) => {
  if (!portfolio) {
    return <></>;
  }

  return (
    <ul>
      {portfolio.map((el) => {
        return (
          <li key={el._id} className={styles["item"]}>
            <div className={styles["item__image-box"]}>
              <Image width={620} height={120} alt="ss" src={el.image} />
            </div>
            <div className={styles["item__contents-wrapper"]}>
              <h2 className={styles["item__title"]}>
                {lang === "uk" ? el.title.uk : el.title.en}
              </h2>
              <div className={styles["item__desc"]}>
                <PortableText
                  value={
                    lang === "uk" ? el.description?.uk : el.description?.en
                  }
                />
              </div>
              <div>
                {el.roles &&
                  el.roles.length <= 3 &&
                  el.roles.map((role) => (
                    <div
                      key={role._key}
                      className={styles["item__wrapper-role"]}
                    >
                      <p>{role.name}</p>
                    </div>
                  ))}
              </div>

              <div>
                {el.libraries &&
                  el.libraries.length <= 3 &&
                  el.libraries.map((lib) => (
                    <div
                      key={lib._key}
                      className={styles["item__wrapper-role"]}
                    >
                      <p>{lib.name}</p>
                    </div>
                  ))}
              </div>

              <Link href="">
                Read More <span>{">>"}</span>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
