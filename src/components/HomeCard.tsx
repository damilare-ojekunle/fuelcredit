import Image from "next/image";
import { formatMoney } from "@/utils/helpers";
export const HomeCard = ({ img, title, amount }) => {
  return (
    <div className="w-[228px] border border-[#E0E6DD] rounded-[20px] ml-[50px] mt-[30px]">
      <Image
        className="mt-7 ml-10"
        src={img}
        width={20}
        height={20}
        alt={title}
      />
      <p className="pt-[48px] pl-10 text-[#8F928E] text-sm">{title}</p>
      <p className="pt-2 pl-10 pb-5 text-[32px] ">{amount}</p>
    </div>
  );
};
