import { useContext } from "react";
import { BudgetForm } from "./components/BudgetForm";
import { BudgetContext } from "./context/BudgetContext";

function App() {
  const contex = useContext(BudgetContext);
  console.log(contex);

  return (
    <>
      <header className="bg-[#272757] py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>

      <div className="bg-white max-w-3xl mx-auto shadow-ls rounded-lg mt-10 p-10 ">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
