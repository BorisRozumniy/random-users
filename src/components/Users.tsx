import { useContext, useEffect } from "react";
import { ContextType } from "../@types/context";
import { getRequestUsers } from "../store/actions/getRequestUsers";
import { Context } from "../store/context";
import { User } from "./User";

export const Users = () => {
  const { usersDispatch: dispatch, usersState } = useContext(
    Context
  ) as ContextType;

  useEffect(() => {
    getRequestUsers({ dispatch });
  }, []);

  console.log("usersState:", usersState);

  return (
    <>
      <h1>Users</h1>
      {usersState.users.map((user) => (
        <User key={user.id.value || user.name.last} user={user} />
      ))}
    </>
  );
};