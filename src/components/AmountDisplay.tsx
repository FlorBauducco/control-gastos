import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label?: string;
  amount: number;
};

export const AmountDisplay = ({ label, amount }: AmountDisplayProps) => {
  return (
    <p className="text-2xl text-gray-500 font-bold ">
      {label && `${label}: `}
      <span className="font-black text-[#272757]">
        {" "}
        {formatCurrency(amount)}
      </span>
    </p>
  );
};
