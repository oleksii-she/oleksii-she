import { ISkills } from "@/types/types";
import { SkillsItem } from "./skillsItem";
import styles from "./skills.module.scss";
export const SkillsList = ({ list }: { list: ISkills[] }) => {
  return (
    <ul className={styles.list}>
      <SkillsItem list={list} />
    </ul>
  );
};
