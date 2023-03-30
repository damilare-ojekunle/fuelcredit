import React from "react";
import Link from "next/link";
import Image from "next/image";

export const PrimaryButton = ({
  title,
  type = "button",
  onClick,
  className,
  disabled,
  color,
}: {
  title: any;
  type?: "button" | "submit" | "reset";
  onClick?: (e?: any) => void;
  className?: string;
  disabled?: boolean;
  color?: string;
}) => {
  return (
    <button
      type={type}
      className={`px-8 py-3  text-[1rem] ${
        color || "text-white"
      } bg-primary-green rounded-[10px] outline-none inline-flex items-center gap-2 ${className} ${
        disabled ? "opacity-50" : "opacity-100"
      } `}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="text-center">{title}</p>
    </button>
  );
};
export const PrimaryLink = ({
  title,
  url,
  className,
}: {
  title: string;
  url: string;
  className?: string;
}) => {
  return (
    <Link
      href={url}
      className={`px-8 py-[10px] text-[1rem] text-primary-green border border-primary-green bg-white rounded-[10px] outline-none inline-flex items-center gap-2 ${className}`}
    >
      {title}{" "}
    </Link>
  );
};

export const ButtonLink = ({
  url,
  text,
  widthClass,
  arrow,
}: {
  url: string;
  text: string;
  arrow: string;
  widthClass: string;
}) => {
  return (
    <>
      <Link href={url}>
        <div
          className={`inline-flex px-[20px] bg-[#FFC700]  items-center gap-[15px] py-[16px] ${widthClass}`}
        >
          <p>{text}</p>
          <Image src={arrow} alt={text} width={12} height={15} />
        </div>
      </Link>
    </>
  );
};
