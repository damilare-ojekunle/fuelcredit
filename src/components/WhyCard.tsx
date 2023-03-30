import Link from "next/link";
import Image from "next/image";
export const WhyCard = ({
  src,
  text,
  body,
}: {
  src?: any;
  text?: string;
  body?: string;
}) => {
  return (
    <div className="bg-[#F9FAF9] rounded-[40px] w-[376px] pl-[50px]">
      <Image
        className="pt-[50px] "
        src={src}
        width={25}
        height={25}
        alt="Why Card"
      />
      <p className="text-[24px] font-bold text-black max-w-[249px] whitespace-nowrap pt-[31px]">
        {text}
      </p>
      <p className=" max-w-[245px] pt-5 pb-[60px] text-primary-gray">{body}</p>
    </div>
  );
};
