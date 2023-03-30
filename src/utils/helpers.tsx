export const naira = <>&#8358;</>;

export const formatMoney = (text: string) => {
  return Intl.NumberFormat("NGN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(text));
};

export const formatNumber = (text: string) => {
  return Intl.NumberFormat("NGN", { maximumFractionDigits: 2 }).format(
    Number(text)
  );
};
