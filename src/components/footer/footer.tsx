import Link from "next/link";

import Image from "next/image";
import styles from "./footer.module.scss";
import logo from "../../../public/logo.png";
import { UActiveLink } from "../UComponents/activeLink/activeLink";
import LocaleSwitcher from "../localeSwitcher/localeSwitcher";
import { LinkedinIcon, GitHubIcon, TelegramIcon } from "../icons";
import { Locale } from "../../../i18n.config";
import { ScrollTop } from "@/components/scrollTop/scrollTop";
export const Footer = ({ locale }: { locale: Locale }) => {
  return (
    <footer className={styles.footer}>
      <div className="">
        <div className="container mx-auto">
          <div className={`${styles.wrapper}`}>
            <Link href="/" className="logo">
              {"<O/S>"}
            </Link>
            <ScrollTop />
            <ul className={`${styles["contacts-list"]}`}>
              <li>
                <Link
                  href="https://www.linkedin.com/in/oleksii-shevchenko-36475a252/"
                  target="blank"
                  className="flex items-center"
                >
                  <LinkedinIcon className={styles["contacts-list__icon"]} />
                  {/* <span className={styles["contacts-span"]}>Linkedin</span> */}
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/oleksii_she"
                  className="flex items-center"
                  target="blank"
                >
                  <TelegramIcon className={styles["contacts-list__icon"]} />
                  {/* <span className={styles["contacts-span"]}>Telegram</span> */}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/oleksii-she"
                  className="flex items-center"
                  target="blank"
                >
                  <GitHubIcon className={styles["contacts-list__icon"]} />
                  {/* <span className={styles["contacts-span"]}>Github</span> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
