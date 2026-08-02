import { useMemo, useState } from "react";
import { useBudget } from "../hook/useBudget";

export const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "add-budget", payload: { budget } });
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5 ">
          <label
            htmlFor="budget"
            className="text-4xl text-[#0F0E47] text-center font-bold"
          >
            Definir Presupuesto
          </label>
          <input
            id="budget"
            type="number"
            name="budget"
            placeholder="0"
            className="w-full bg-gray-50 p-2 border border-gray-100 rounded-md"
            value={budget === 0 ? "" : budget}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="Añadir Presupuesto"
          className="bg-[#505081] hover:bg-[#272757] cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
          disabled={isValid}
        />
      </form>
    </>
  );
};
