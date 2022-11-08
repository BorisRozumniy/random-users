import { createContext, FC, ReactNode, useReducer, useState } from "react";
import { initialState, reducer } from "./reducers/usersReducer";
import { ContextType } from "../@types/context";

export const Context = createContext<ContextType | null>(null);

interface Props {
  children: ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  const [usersState, usersDispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        usersState,
        usersDispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
