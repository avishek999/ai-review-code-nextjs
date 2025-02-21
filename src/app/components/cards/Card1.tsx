/** core libraries & installed libraries */
import React from "react";

/** Icons */
import { IconType } from "react-icons";

/** Interfaces */
interface Icards {
  title: string;
  description: string;
  Icon: IconType;
}

const Card1: React.FC<Icards> = ({ title, description, Icon }) => {
  return (
    <div className="space-y-3 w-[27%] h-full bg-[var(--secondary-background-color)] rounded-xl p-6">
      <div className="p-3 bg-[var(--accent-color2)] text-[var(--icon-color)] w-fit rounded">
        <Icon size={24} />
      </div>
      <h2 className="font-bold text-[20px]">{title}</h2>
      <p className="text-[var(--secondary-text-color)] w-[80%] text-[15px]">
        {description}
      </p>
    </div>
  );
};

export default Card1;
