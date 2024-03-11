import { ISkills } from "@/types/types";
import Image from "next/image";
export const SkillsItem = ({ list }: { list: ISkills[] }) => {
  if (!list) {
    return <></>;
  }

  {
    return list.map((el) => {
      return (
        <li key={el._id}>
          <div>
            <Image src={el.image} alt={el.name} width={144} height={144} />
          </div>
          <p>{el.name}</p>
        </li>
      );
    });
  }
};
