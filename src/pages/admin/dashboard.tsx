import DashboardLayout from "@/layouts/DashboardLayout";
import { useAuth } from "@/contexts/AuthContext";

import { formatMoney } from "@/utils/helpers";

import Image from "next/image";

import { HomeCard, Wallet, Credit } from "@/components";
import { FuelPurchases } from "@/components/FuelPurchases";
const data = [
  {
    id: 1,
    img: "/icons/union.svg",
    title: "Fuel purchases",
    amount: "24",
  },
  {
    id: 2,
    img: "/icons/credit1.svg",
    title: "Fuel purchases",
    amount: "#155k",
  },
  {
    id: 3,
    img: "/icons/beneficiaries1.svg",
    title: "Beneficaries",
    amount: "7",
  },
  {
    id: 4,
    img: "/icons/filling.svg",
    title: "Filling Stations",
    amount: "24",
  },
];
const Dashboard = () => {
  return (
    <DashboardLayout
      title={
        <p className="flex items-center gap-2 text-black text-[24px]">Hello</p>
      }
    >
      <div className="flex items-center flex-wrap">
        {data?.map(({ id, img, title, amount }) => {
          return (
            <div key={id} className="">
              <HomeCard img={img} title={title} amount={amount} />
            </div>
          );
        })}
      </div>
      <div className="flex  ">
        <div className="w-[529px]  ml-[50px] mt-[30px]">
          <div className=" flex  items-center justify-between">
            <p className="text-[22px] text-black pl-2 pt-2 ">Wallet</p>
            <p className="text-primary-green text-[16px] pr-2 pt-2">
              See Details{" "}
            </p>
          </div>
          <div className="mt-3">
            <Wallet />
          </div>
        </div>
        <div className="w-[429px]  ml-[50px] mt-[30px]">
          <div className=" flex  items-center justify-between">
            <p className="text-[22px] text-black pl-2 pt-2 ">Credit</p>
            <p className="text-primary-green text-[16px] pr-2 pt-2">
              See Details{" "}
            </p>
          </div>
          <div>
            <Credit />
          </div>
        </div>
      </div>
      <div className="ml-[50px] mt-[30px]">
        <FuelPurchases />
      </div>
    </DashboardLayout>
  );
};
export default Dashboard;
