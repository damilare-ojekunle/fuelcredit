import { PrimaryButton, PrimaryLink } from "./Button";
import Image from "next/image";
import { WhyFuel } from "./WhyFuel";

const logos = [
  {
    id: 1,
    src: "/icons/total.svg",
  },
  {
    id: 2,
    src: "/icons/northwest.svg",
  },
  {
    id: 3,
    src: "/icons/heyden.svg",
  },
  {
    id: 4,
    src: "/icons/mobil.svg",
  },
];

export const Hero = () => {
  return (
    <>
      <div className="flex ">
        <div className="mt-[187px] ml-[100px]">
          <p className="text-[56px] text-secondary-green  font-bold max-w-[571px]">
            Buy fuel easier and faster with FuelCredit
          </p>
          <p className="max-w-[535px] mt-[40px]">
            Buy fuel with your registered phone numberand on credit (if
            necessary). Add beneficiaries to your account and track your fuel
            consumption all with one account.
          </p>
          <div className="flex gap-8 mt-[70px]">
            <PrimaryButton className=" px-6 py-3" title="Create free account" />
            <div className="flex items-center gap-4">
              <p className="text-[#8F928E]">Coming Soon to </p>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/android.svg"
                  width={25}
                  height={25}
                  alt="android"
                />
                <Image
                  src="/icons/apple.svg"
                  width={25}
                  height={25}
                  alt="apple"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/header.png"
            width={600}
            height={600}
            alt="header"
          />
        </div>
      </div>
      <div className="mt-[200px] ml-[100px]">
        <p className="text-[24px] text-[#8F928E]">Our Partner Stations</p>
        <div className="flex items-center gap-8 mt-[56px]">
          <div className="flex items-center justify-between gap-8 ">
            {logos.map(({ id, src }) => (
              <div className="" key={id}>
                <Image src={src} width={100} height={100} alt="" />
              </div>
            ))}
          </div>
          <PrimaryLink
            className="text-[16px] py-4"
            title="See all Locations"
            url="#"
          />
        </div>
        <WhyFuel />
      </div>
    </>
  );
};
