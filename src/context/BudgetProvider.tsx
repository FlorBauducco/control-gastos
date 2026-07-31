import { useReducer, type ReactNode } from "react";
import { budgetReducer, initialState } from "../reducers/budgte-reducer";
import { BudgetContext } from "./BudgetContext";

type BudgetProviderProps = {
  children: ReactNode;
};

//Provider: es de donde provienen los datos que va a tener el context
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
