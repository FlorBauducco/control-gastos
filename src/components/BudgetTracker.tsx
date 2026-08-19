import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useBudget } from "../hook/useBudget";
import { AmountDisplay } from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export const BudgetTracker = () => {
  const { state, totalExpenses, remainingBudget } = useBudget();

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(0);
  console.log(percentage);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap 5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#DC2626" : "#505081",
            trailColor: "#F5F5F5",
            textSize: 8,
            textColor: percentage === 100 ? "#DC2626" : "#272757",
          })}
          text={`${percentage}% Gastado`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-[#8686AC] w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer "
        >
          Resetear App
        </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />

        <AmountDisplay label="Disponible" amount={remainingBudget} />

        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
};
