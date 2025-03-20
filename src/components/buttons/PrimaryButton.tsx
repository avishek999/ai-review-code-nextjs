import Link from "next/link";
import React from "react";

interface IPrimaryButton {
  title: string;
  href: string;
  className?: string;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  title,
  href,
  className,
}) => {
  return (
    <Link
      href={{ href }}
      className={` ${className} px-4 py-2 rounded font-semibold bg-[var(--primary-color)]`}
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
