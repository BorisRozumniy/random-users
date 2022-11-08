import { Dispatch } from "react";
import { ACTIONTYPE, UsersState } from "./user";


export type ContextType = {
  usersState: UsersState,
  usersDispatch: Dispatch<ACTIONTYPE>,
};

