import { useMemo, useState } from "react";

export const BudgetForm = () => {
  const [budget, setBudget] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value);
  };

  const isValid = useMemo(() => {
    return isNaN(budget);
  }, [budget]);

  return (
    <>
      <form className="space-y-5">
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
          className="bg-[#505081] hover:bg-[#272757] cursor-pointer w-full p-2 text-white font-black uppercase disable:opacity-40"
          disabled={isValid}
        />
      </form>
    </>
  );
};
