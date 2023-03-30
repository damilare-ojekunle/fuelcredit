import Image from "next/image";
import { WhyCard } from "./WhyCard";
const data = [
  {
    id: 1,
    img: "/icons/event.svg",
    text: "Seamless Transactions",
    body: "Buy fuel easier and faster with just your phone number. Cash or card not needed",
  },
  {
    id: 2,
    img: "/icons/event.svg",
    text: "Seamless Transactions",
    body: "Buy fuel easier and faster with just your phone number. Cash or card not needed",
  },
  {
    id: 3,
    img: "/icons/event.svg",
    text: "Seamless Transactions",
    body: "Buy fuel easier and faster with just your phone number. Cash or card not needed",
  },
  {
    id: 4,
    img: "/icons/event.svg",
    text: "Seamless Transactions",
    body: "Buy fuel easier and faster with just your phone number. Cash or card not needed",
  },
];
export const WhyFuel = () => {
  return (
    <div className=" flex justify-between w-full mt-[200px] ml-[100px] ">
      <div className="flex flex-col w-[30%] h-full ">
        <p className="text-[18px] text-[#626762]">Why FuelCredit?</p>
        <p className="max-w-[346px] text-[42px] text-secondary-green font-bold mt-5  brink-bold">
          Your convenience is our priority
        </p>
        <Image
          className="self-end mt-[328px]"
          src="/images/hero.png"
          width={500}
          height={500}
          alt="hero"
        />
      </div>
      <div className="flex gap-8 flex-wrap flex-1 mb-[210px]">
        {data?.map(({ id, img, text, body }) => (
          <div key={id}>
            <WhyCard src={img} text={text} body={body} />
          </div>
        ))}
      </div>
    </div>
  );
};
