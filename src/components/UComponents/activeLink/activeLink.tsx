"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import styles from "./activeLink.module.scss";
import { Locale } from "../../../../i18n.config";

export const UActiveLink = ({
  href,
  children,
  lang,
}: {
  href: string;
  children: React.ReactNode;
  lang: Locale;
}) => {
  const router = usePathname();
  if (!router) return;
  const path = router;

  if (path === `/${lang}` && href === `/${lang}/`) {
    return (
      <Link
        href={href}
        className={`${styles["link__active"]} ${styles["link"]}`}
      >
        {children}
      </Link>
    );
  }

  if (`${path}` === href) {
    return (
      <Link
        href={href}
        className={`${styles["link__active"]} ${styles["link"]}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
};
