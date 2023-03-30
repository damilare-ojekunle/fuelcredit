import { PrimaryButton } from "./Button";
import { BuyCard } from "./BuyCard";
const data = [
  {
    id: 1,
    title: "FuelCredit",
    subtitle: "Quick",
    content: [
      {
        list: "For individual Bike Riders on corporate names such as Gokada Kwik amongst others",
      },
      {
        list: "Maximum credit: ₦1,500",
      },
      {
        list: "Pay back in 24 hours",
      },
    ],
  },
  {
    id: 2,
    title: "FuelCredit",
    subtitle: "Quick",
    content: [
      {
        list: "For individual Bike Riders on corporate names such as Gokada Kwik amongst others",
      },
      {
        list: "Maximum credit: ₦1,500",
      },
      {
        list: "Pay back in 24 hours",
      },
    ],
  },
  {
    id: 3,
    title: "FuelCredit",
    subtitle: "Quick",
    content: [
      {
        list: "For individual Bike Riders on corporate names such as Gokada Kwik amongst others",
      },
      {
        list: "Maximum credit: ₦1,500",
      },
      {
        list: "Pay back in 24 hours",
      },
    ],
  },
];

export const BuyFuel = () => {
  return (
    <div className="bg-[#F9FAF9]">
      <div className="pt-[130px] flex flex-col items-center justify-center">
        <p className="text-[#31581C]  text-[42px]">
          Buy fuel on credit now and pay later
        </p>
        <p className=" max-w-xl text-primary-gray mt-[40px]">
          With our 24 hours, 7 days and monthly repayment plans, our credit
          plans give you even more convenience to buy fuel whenever you need it
        </p>

        <div className="flex gap-8 mt-[70px]">
          {data?.map(({ id, title, subtitle, content }) => {
            return (
              <div className="px-4" key={id}>
                <BuyCard
                  title={title}
                  subtitle={subtitle}
                  // listItem={
                  //   <ul>
                  //     {
                  //       <li>
                  //         {content.map(({ list }) => (
                  //           <li className="mt-5" key={id}>
                  //             {list}
                  //           </li>
                  //         ))}
                  //       </li>
                  //     }
                  //   </ul>
                  // }
                />
              </div>
            );
          })}
        </div>
        <div className="mt-[90px] mx-auto pb-40">
          <PrimaryButton title="Get Credit Now" />
        </div>
      </div>
    </div>
  );
};
