/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./lacale.module.scss";
import { LanguageIcon } from "../icons";
import { Locale } from "../../../i18n.config";

export default function LocaleSwitcher({ lang }: Readonly<{ lang: Locale }>) {
  const [langHidden, setLangHidden] = useState(false);
  const pathName = usePathname();

  const localeSwitcherRef = useRef<HTMLDivElement>(null);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  redirectedPathName("en");
  if (!pathName) {
    return;
  }
  const segment = pathName.split("/");

  const linkPatch = (link: string): string => {
    if (link === "uk") {
      return "en";
    }

    return "uk";
  };

  const nextLinkPatch = linkPatch(String(segment[1]));

  const handleClickOutside = (e: Event) => {
    if (
      localeSwitcherRef.current &&
      !localeSwitcherRef.current.contains(e.target as Node)
    ) {
      setLangHidden(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setLangHidden(false);
    }
  };

  useEffect(() => {
    if (!localeSwitcherRef) {
      return;
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.locale} ref={localeSwitcherRef}>
      <button onClick={() => setLangHidden(!langHidden)}>
        <LanguageIcon className={styles.icon} />
        {lang === "uk" ? "ua" : "en"}
      </button>

      <ul className={langHidden ? `${styles.active}` : ``}>
        <li className={styles.activeItem}>{lang === "uk" ? "ua" : "en"}</li>
        <li>
          <Link href={redirectedPathName(nextLinkPatch)}>
            {lang === "uk" ? "en" : "ua"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
