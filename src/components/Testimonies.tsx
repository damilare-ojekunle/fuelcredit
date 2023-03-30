import Image from "next/image";
import { PrimaryButton, PrimaryLink } from "./Button";
import { FAQ } from "./FAQ";
const logos = [
  {
    id: 1,
    logo: "/icons/paystack.svg",
    width: "173",
    height: "31",
  },
  {
    id: 2,
    logo: "/icons/okra.svg",
    width: "78",
    height: "68",
  },
  {
    id: 3,
    logo: "/icons/periculum.svg",
    width: "139",
    height: "56",
  },
  {
    id: 4,
    logo: "/icons/mono.svg",
    width: "120",
    height: "18",
  },
  {
    id: 5,
    logo: "/icons/indicina.svg",
    width: "192",
    height: "58",
  },
];
const details = [];

export const Testimonies = () => {
  return (
    <div className="pt-[153px]">
      <p className="text-center text-[#8F928E] text-[24px]">
        Our Technical Partners
      </p>
      <div className="flex items-center justify-around mt-[50px] mb-[275px]">
        {logos?.map(({ id, logo, width, height }) => {
          return (
            <div key={id}>
              <Image src={logo} width={75} height={75} alt="partners logo" />
            </div>
          );
        })}
      </div>
      <p className="text-center text-[#31581C] text-[42px]">
        Trusted by individuals, companies and merchants
      </p>
      <div className=" flex justify-around mt-[107px] mx-[149px]">
        <div>
          <p className="text-[32px] max-w-[295px]">
            FuelCredit for{" "}
            <span className="text-primary-green">Individuals/Families</span>
          </p>
          <p className="max-w-[419px] mt-[30px]">
            With FuelCredit, individuals and families get to buy fuel more
            conveniently with just a phone number, buy fuel on credit, add
            benficiaries to their accounts, track and manage fuel consumption
          </p>
          <PrimaryLink
            className="mt-[50px]"
            url="#"
            title="Create an individual account"
          />
        </div>
        <div>
          <Image
            src="/images/family.png"
            width={600}
            height={600}
            alt="family"
          />
        </div>
      </div>
      <div className="flex gap-16 mx-[149px] mt-[224px]">
        <Image
          src="/images/corporate.png"
          width={600}
          height={600}
          alt="cooperate"
        />
        <div>
          <p className="max-w-[305px] text-[32px]">
            FuelCredit for <span className="text-[#186CE9]">Corporates</span>
          </p>
          <p className="max-w-[453px] mt-8 text-[#626762] text-[18px]">
            We help corporations make seamless fuel purchases for their fleet,
            add unlimited beneficiaries and track fuel purchases, all with one
            account. Corporates fall under three categories:{" "}
          </p>
          <p className="text-[18px] text-black mt-9">Corporate Business</p>
          <li className="text-[#626762] text-[16px] mt-2">
            This covers entities whose core business is in logistics and
            transportation
          </li>
          <div className="mt-[30px]">
            <p className="text-[18px] text-black mt-9">Corporate Business</p>
            <li className="text-[#626762] text-[16px] mt-2">
              This covers entities whose core business is in logistics and
              transportation
            </li>
          </div>
          <div className="mt-[30px]">
            <p className="text-[18px] text-black mt-9">Corporate Business</p>
            <li className="text-[#626762] text-[16px] mt-2">
              This covers entities whose core business is in logistics and
              transportation
            </li>
          </div>

          <PrimaryLink
            className="mt-16 "
            title="Create a corporate account"
            url="#"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-[210px] mx-[149px] ">
        <div>
          <p className="max-w-[305px] text-[32px]">
            FuelCredit for <span className="text-[#E98918]">Corporates</span>
          </p>
          <p className="mt-[15px] max-w-[408px] text-[#626762] text-[18px]">
            We partner with filling stations to help them boost sales and
            increase customer loyalty through seamless transactions and credit
            services at zero risk when they sign up on FuelCredit
          </p>
          <PrimaryLink className="mt-[47px]" url="#" title="Learn More" />
        </div>
        <Image
          src="/images/merchant.png"
          width={600}
          height={600}
          alt="merchant"
        />
      </div>
      <div className="mt-[241px]  text-[#31581C]">
        <p className="text-[42px] text-center ">
          Buy fuel the easy way in just 3 simple steps
        </p>
        <div className=" flex justify-around mt-[134px] ml-[100px] ">
          <div>
            <div className="flex items-center gap-4">
              <Image src="/icons/user.svg" width={25} height={25} alt="user" />
              <p className="text-black">Create Account</p>
            </div>
            <p className="max-w-[330px] text-primary-gray mt-[50px]">
              Create a FuelCredit account by choosing an account type and
              providing the required details
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/icons/wallet.svg"
                width={25}
                height={25}
                alt="user"
              />
              <p className="text-black">Fund Wallet</p>
            </div>
            <p className="max-w-[330px] text-primary-gray mt-[50px]">
              Fund your wallet using your bank card, internet banking or cash at
              any of our partner stations
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <Image src="/icons/fuel.svg" width={25} height={25} alt="user" />
              <p className="text-black">Buy Fuel</p>
            </div>
            <p className="max-w-[330px] text-primary-gray mt-[50px]">
              You’re all set to start buying fuel at our partner filling
              stations with just your phone number
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[90px]">
          <PrimaryButton className="" title="Get Started" />
        </div>
        <FAQ />
      </div>
    </div>
  );
};
