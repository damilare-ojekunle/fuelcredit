import Image from "next/image";
import { PrimaryButton } from "./Button";
export const Credit = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] rounded-[20px]">
        <div className="flex items-center gap-8 pt-8 pl-9">
          <p>FuelCredit “Quick” balance</p>
          <Image src="/icons/hidePassword.svg" width={25} height={25} alt="" />
        </div>
        <p className="text-[32px] pt-4 pl-9">- ₦4,500</p>
        <p className="text-[16px] text-[#8F928E] pt-5 pl-9">
          You can still request up to{" "}
          <span className="text-[18px] text-black">₦5,500</span>
        </p>
        <hr className="mx-6 mt-5" />
        <div className=" flex items-center gap-4 pt-[34px] pl-8 pb-6">
          <PrimaryButton title="Request credit" />
          <p className="text-[16px] text-[#8F928E]">
            Repayment due in <span className="text-black">2 days </span>
          </p>
        </div>
      </div>
    </div>
  );
};
