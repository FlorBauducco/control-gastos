import { createContext, type ActionDispatch } from "react";
import {
  type BudgetActions,
  type BudgetState,
} from "../reducers/budgte-reducer";

//es para dar informacion
type BudgetContextProps = {
  state: BudgetState;
  dispatch: ActionDispatch<[action: BudgetActions]>;
};

//Context es tener la accion de un estado global
export const BudgetContext = createContext<BudgetContextProps>(null!);
