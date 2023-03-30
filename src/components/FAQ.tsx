import Image from "next/image";
import { useState } from "react";
import { PrimaryLink } from "./Button";
const data = [
  {
    id: 1,
    title: "What is FuelCredit?",
    img: "/icons/dropdown.svg",
  },
  {
    id: 2,
    title: "What is FuelCredit?",
    img: "/icons/dropdown.svg",
  },
  {
    id: 3,
    title: "What is FuelCredit?",
    img: "/icons/dropdown.svg",
  },
  {
    id: 4,
    title: "What is FuelCredit?",
    img: "/icons/dropdown.svg",
  },
  {
    id: 5,
    title: "What is FuelCredit?",
    img: "/icons/dropdown.svg",
  },
];
export const FAQ = ({}) => {
  const [faqAnswer, showFaqAnswer] = useState<any>(null);

  const faqDropdwonHandler = ({ id }: { id: number }) => {
    if (faqAnswer !== id) {
      showFaqAnswer(id);
      return;
    }
    showFaqAnswer(null);
  };
  return (
    <div>
      <p className="mt-[200px] text-center text-[#31581C] text-[42px] ">
        Got questions?
      </p>
      <div className="mx-[213px] mt-[65px]">
        {data?.map(({ id, title, img }) => (
          <div
            key={id}
            onClick={() => faqDropdwonHandler({ id })}
            className=" flex items-center mt-7 justify-between py-[25px] rounded-[20px] px-[40px] bg-[#F7F7F7] "
          >
            <p>{title}</p>
            <Image
              src={img}
              width={20}
              height={20}
              alt="arrow"
              className={`${faqAnswer === id ? "rotate-180" : ""}`}
            />
            {/* <p className="mt-[10px] text-[14px] text-[#140F00CC]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cum
              accusantium debitis porro aliquam optio facere dolorum doloribus
              a. Sed possimus consequuntur accusantium obcaecati est impedit
              itaque libero ipsum adipisci.
            </p> */}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[65px]">
        <PrimaryLink url="#" title="See all questions" />
      </div>
      <div className="mt-[217px] mx-[187px] rounded-[40px] bg-[#EAEEE8] pb-[103px]">
        <p className="text-[#31581C] pt-[102px] pl-[81px] text-[32px]">
          We’re coming soon to
        </p>
        <div className="">
          <div className="flex items-center">
            <div className="mt-[29px] flex items-center justify-center gap-4 p-4 rounded-md w-[182px]  ml-[81px] bg-white">
              <Image
                className=""
                src="/icons/android.svg"
                width={25}
                height={25}
                alt="store"
              />
              <p>Play Store</p>
            </div>
            <div className="mt-[29px] flex items-center justify-center gap-4 p-4 rounded-md w-[182px]  ml-[81px] bg-white">
              <Image
                className=""
                src="/icons/apple.svg"
                width={25}
                height={25}
                alt="store"
              />
              <p>Apple Store</p>
            </div>
          </div>
          {/* <div>
            <Image
              src="/images/header.png"
              width={500}
              height={500}
              alt="header"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
