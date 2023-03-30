import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { routes } from "@/utils/routes";
import { useToggle } from "@/hooks";
import { useAuth } from "@/contexts/AuthContext";

const Sidebar = () => {
  const pathname = useRouter().pathname;
  const activeLink = (href) => pathname.startsWith(href);

  return (
    <div className="w-[16rem] h-screen border ">
      <div>
        <div className="w-[10rem] mx-auto mt-5">
          <Image src="/icons/logo.svg" width={150} height={150} alt="logo " />
        </div>
        <div className="w-full px-6 pt-10 pb-6 flex flex-col gap-y-3">
          {routes?.map((data, index) => {
            return (
              <div key={index}>
                <Link
                  href={data?.url}
                  key={data?.url}
                  className={`text-white px-4 py-3 rounded-[3px] text-[1rem] flex items-center gap-3 ${
                    activeLink(data?.url) ? "bg-[#EDF8E8]" : "bg-transparent"
                  }`}
                >
                  <Image
                    src={
                      activeLink(data?.url) ? data?.activeImage : data?.image
                    }
                    alt={data?.title}
                    width={18}
                    height={18}
                    className={`${activeLink(data?.url) ? "" : "opacity-70"}`}
                  />
                  <span
                    className={`${
                      activeLink(data?.url)
                        ? "text-[#8FA882]"
                        : "text-[#8F928E]"
                    }`}
                  >
                    {data?.title}
                  </span>
                </Link>
                {/* <Link
                  href={data.url}
                  className={`  flex items-center gap-4 px-4 py-2 ${
                    activeLink(data?.url) ? "bg-red-500" : "bg-transparent"
                  }`}
                >
                  <Image
                    src={
                      activeLink(data?.url) ? data?.activeImage : data?.image
                    }
                    width={20}
                    height={20}
                    alt={data?.title}
                    className={`${activeLink(data?.url) ? "" : "opacity-70"}`}
                  />
                  <p className="">{data?.title}</p>
                </Link> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
