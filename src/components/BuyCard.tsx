export const BuyCard = ({
  title,
  subtitle,
  listItem,
}: {
  title?: string;
  subtitle?: string;
  listItem?: any;
}) => {
  return (
    <div className=" flex flex-col items-center justify-center rounded-[40px] w-[392px] bg-white ">
      <p className="pt-[60px] text-[24px] ">
        {title}
        <span className="ml-4 text-primary-green">{subtitle}</span>
      </p>
      <p className="max-w-[250px] text-[16px] mt-[35px] pb-[64px]  text-primary-gray">
        {listItem}
      </p>
    </div>
  );
};
