import Image from "next/image";
export const DashboardHeader = ({
  title,
  white,
}: {
  title?: any;
  white?: boolean;
}) => {
  return (
    <div
      className={`w-full sticky top-0 left-0 z-[10] px-10 pt-6 pb-4 border-b ${
        white ? "bg-white" : "bg-[#fcfcfc]"
      } flex items-center justify-between`}
    >
      <div>{title}</div>

      <div className="flex items-center gap-8">
        <Image
          src="/icons/events.svg"
          alt="event icon"
          width={20}
          height={20}
        />

        <Image
          src="/icons/notifications.svg"
          alt="notification icon"
          width={20}
          height={20}
        />
        <div className="flex items-center gap-2">
          <Image
            src="/icons/profile.svg"
            alt="user icon"
            width={20}
            height={20}
          />
          <Image
            src="/icons/dropdown.svg"
            alt="dropdown icon"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};
