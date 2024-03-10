import { IProfile } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "../../../i18n.config";
import styles from "./profile.module.scss";
import { MailIcon, LocationIcon, DownloadIcon, TelegramIcon } from "../icons";
export const Profile = ({
  profileObj,
  lang,
}: {
  profileObj: IProfile;
  lang: Locale;
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles["profile__image-box"]}>
        <Image
          height={100}
          width={100}
          alt="avatar"
          src={profileObj.image}
          className={styles["profile__avatar"]}
        />
        <h2 className={styles["profile__name"]}>
          {lang === "uk" ? profileObj.name?.uk : profileObj.name?.en}
        </h2>
        <p>{profileObj.profession}</p>
      </div>

      <ul className={styles["profile__list"]}>
        <li>
          <MailIcon className="" />
          <Link href={`mailto:${profileObj.email}`} target="blank">
            {profileObj.email}
          </Link>
        </li>
        <li>
          <TelegramIcon className="" />
          <Link href={`https://t.me/oleksii_she`} target="blank">
            oleksii_she
          </Link>
        </li>
        <li>
          <LocationIcon className="" />
          <Link
            href={`https://www.google.com/maps/place/${
              lang === "uk" ? profileObj.location?.uk : profileObj.location?.en
            }`}
            target="blank"
          >
            {lang === "uk" ? profileObj.location?.uk : profileObj.location?.en}
          </Link>
        </li>
      </ul>
      <Link
        download={true}
        href={profileObj.cv}
        className={styles["profile__cv"]}
        target="blankq"
      >
        {lang === "uk" ? "Завантажити CV" : "Download CV"}
        <DownloadIcon className={styles["profile__cv-icon"]} />
      </Link>
    </div>
  );
};
