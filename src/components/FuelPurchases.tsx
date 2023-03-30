import Image from "next/image";
export const FuelPurchases = () => {
  return (
    <div className="mt-[50px]">
      <p className="text-[22px]">Fuel Purchases </p>
      <Image
        src="/images/statictics.png"
        width={700}
        height={700}
        alt="chart"
      />
    </div>
  );
};
