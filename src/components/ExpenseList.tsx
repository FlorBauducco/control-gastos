import { useMemo } from "react";
import { useBudget } from "../hook/useBudget";
import { ExpenseDetail } from "./ExpenseDetail";

export const ExpenseList = () => {
  const { state } = useBudget();

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);

  return (
    <div className="mt-10  ">
      {isEmpty ? (
        <p className="text-gray-500 text-2xl font-bold">No hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-500 text-2xl font-bold my-5">
            Listado de Gastos
          </p>
          {state.expenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};
