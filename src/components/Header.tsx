import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, PrimaryLink } from "./Button";

export const Header = () => {
  return (
    <div className="flex  justify-between px-[50px] pt-[23px]">
      <div className="flex items-center gap-10 ">
        <Link href="/">
          <Image src="/icons/logo.svg" alt="logo" width={150} height={150} />
        </Link>

        <Link className="text-primary-green text-[16px]" href="/">
          Individuals/Corporates
        </Link>
        <Link className="text-[#626762] text-[16px]" href="/merchant">
          Merchants
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <Link className="text-[#626762] text-[16px]" href="/about-us">
          About Us
        </Link>
        <Link className="text-[#626762] text-[16px]" href="/faq">
          FAQs
        </Link>
        <PrimaryLink
          title="Log In"
          url="/login"
          className="border border-primary-green "
        />
        <Link href="/register">
          <PrimaryButton
            className=" whitespace-nowrap  "
            title="Create free account"
          />
        </Link>
      </div>
    </div>
  );
};
