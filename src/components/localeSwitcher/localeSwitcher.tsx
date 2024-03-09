"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./lacale.module.scss";
import { LanguageIcon } from "../icons";

export default function LocaleSwitcher() {
  const [langHidden, setLangHidden] = useState(false);
  const pathName = usePathname();
  const redirect = pathName === "/uk" ? "en" : "uk";
  const localeSwitcherRef = useRef<HTMLDivElement>(null);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

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
        {pathName.replace("/", "") !== "uk" ? "en" : "ua"}
      </button>

      <ul className={langHidden ? `${styles.active}` : ``}>
        <li className={styles.activeItem}>
          {pathName.replace("/", "") !== "uk" ? "en" : "ua"}
        </li>
        <li>
          <Link href={redirectedPathName(redirect)}>
            {redirect !== "uk" ? "en" : "ua"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
