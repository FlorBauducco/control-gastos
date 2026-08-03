import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-[#8686AC] py-2">
        Nuevo gasto
      </legend>

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
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoría:
        </label>
        <select name="category" id="category" className="bg-slate-100 p-2">
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
        <DatePicker className="bg-slate-100 p-2 border-0" />
      </div>

      <input
        type="submit"
        className="bg-[#505081] cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Añadir Gasto"}
      />
    </form>
  );
};
