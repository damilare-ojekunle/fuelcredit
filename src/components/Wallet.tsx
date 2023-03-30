import Image from "next/image";
import { PrimaryButton } from "./Button";
export const Wallet = () => {
  return (
    <div>
      <div className="bg-[#FAFAFA] rounded-[20px]">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-8 pt-8 pl-9">
              <p className="">FuelCredit balance</p>
              <Image
                src={`/icons/hidePassword.svg`}
                width={25}
                height={25}
                alt=""
              />
            </div>
            <p className="text-[32px] pt-4 pl-9">#95,520.00</p>
          </div>
          <PrimaryButton className="mr-9" title="Fund Wallet" />
        </div>

        <hr className="mt-5 mx-6" />
        <div>
          <div className="flex items-center  justify-between px-8 mt-8">
            <p className="text-[18px]">Recent Transactions</p>
            <p className="text-secondary-green">See all</p>
          </div>
          <div className="flex  items-center  justify-between mt-5  px-8 pb-5 ">
            <div className=" ">
              <p className="text-[16px]">Total filling station</p>
              <p className="text-xs text-[#8F928E]">Today 10:00AM</p>
            </div>
            <p className="text-[16px] text-black ">#5,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};
