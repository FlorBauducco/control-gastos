import { useMemo } from "react";
import { formartDate } from "../helpers";
import type { Expense } from "../types";
import { AmountDisplay } from "./AmountDisplay";
import { categories } from "../data/categories";

type ExpenseDetailProps = {
  expense: Expense;
};

export const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense],
  );
  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
      <div>
        <img
          src={`/icono_${categoryInfo.icon}.svg`}
          alt="icono gasto"
          className="w-20"
        />
      </div>

      <div className="flex-1 space-y-2">
        <p className="text-sm font-bold uppercase text-slate-500">
          {categoryInfo.name}
        </p>
        <p>{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">
          {formartDate(expense.date!.toString())}
        </p>
      </div>

      <AmountDisplay amount={expense.amount} />
    </div>
  );
};
