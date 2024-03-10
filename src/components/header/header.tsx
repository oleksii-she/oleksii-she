import Link from "next/link";

import Image from "next/image";
import styles from "./header.module.scss";
import logo from "../../../public/logo.png";
import { UActiveLink } from "../UComponents/activeLink/activeLink";
import LocaleSwitcher from "../localeSwitcher/localeSwitcher";
import { InstagramIcon, DiscordIcon, GitHubIcon } from "../icons";
import { Locale } from "../../../i18n.config";
export const Header = ({ locale }: { locale: Locale }) => {
  return (
    <header className={styles.header}>
      <div className="flex items-center">
        <div className="container mx-auto px-6">
          <div className={`${styles.wrapper}`}>
            <Link href="/" className="logo">
              {"<S/>"}
            </Link>
            <nav>
              <ul className={`${styles["nav-list"]}`}>
                <li>
                  <UActiveLink href={"/"} lang={locale}>
                    Home
                  </UActiveLink>
                </li>
                <li>
                  <UActiveLink href={"/portfolio"} lang={locale}>
                    Portfolio
                  </UActiveLink>
                </li>
              </ul>
            </nav>

            <div>
              <ul className={`${styles["contacts-list"]}`}>
                <li>
                  <Link href="/" className="flex items-center">
                    <InstagramIcon className="mr-2" />
                    <span className={styles["contacts-span"]}>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center">
                    <DiscordIcon className="mr-2" />
                    <span className={styles["contacts-span"]}>Discord</span>
                  </Link>
                </li>
                <li>
                  <Link href="/" className="flex items-center">
                    <GitHubIcon className="mr-2" />
                    <span className={styles["contacts-span"]}>Github</span>
                  </Link>
                </li>
              </ul>
            </div>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
