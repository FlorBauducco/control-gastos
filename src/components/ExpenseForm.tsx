import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type { DraftExpense, Value } from "../types";
import { ErrorMessage } from "./ErrorMessage";
import { useBudget } from "../hook/useBudget";

export const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState("");

  const { dispatch } = useBudget();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validar
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    //Agregar un nuevo gasto

    dispatch({ type: "add-expense", payload: { expense } });

    //Reiniciar el state
    setExpense({
      amount: 0,
      expenseName: "",
      category: "",
      date: new Date(),
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-[#8686AC] py-2">
        Nuevo gasto
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Detalle:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Añade Nombre del gasto"
          className="p-2 bg-slate-100"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Añade Cantidad del gasto: ej. 300"
          className="bg-slate-100 p-2"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoría:
        </label>
        <select
          name="category"
          id="category"
          className="bg-slate-100 p-2"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">--- Seleccione ---</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Fecha:
        </label>
        <DatePicker
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-[#505081] cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Añadir Gasto"}
      />
    </form>
  );
};
