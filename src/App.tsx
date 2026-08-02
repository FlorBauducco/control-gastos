import { useMemo } from "react";
import { BudgetForm } from "./components/BudgetForm";
import { useBudget } from "./hook/useBudget";
import { BudgetTracker } from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";

function App() {
  const { state } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className="bg-[#272757] py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>

      <div className="bg-white max-w-3xl mx-auto shadow-ls rounded-lg mt-10 p-10 ">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
