import { useContext } from "react";
import { ContextType } from "../@types/context";
import { getRequestUsers } from "../store/actions/getRequestUsers";
import { Context } from "../store/context";

export const UpdateButton = () => {
  const { usersDispatch: dispatch } = useContext(Context) as ContextType;

  const onClick = () => {
    getRequestUsers({ dispatch });
  };
  return <button onClick={onClick}>Update Users</button>;
};
