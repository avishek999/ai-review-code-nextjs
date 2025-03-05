import Link from "next/link";
import React from "react";

interface ISecondaryButton {
  title: string;
  href: string;
  padding?: string;
}

const SecondaryButton: React.FC<ISecondaryButton> = ({
  title,
  href,
  padding,
}) => {
  return (
    <Link
      href={{ href }}
      className={` ${padding} px-4 py-2 rounded font-semibold border   border-gray-700`}
    >
      {title}
    </Link>
  );
};

export default SecondaryButton;
