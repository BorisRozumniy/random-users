import { useContext } from "react";
import styled from "styled-components";
import { ContextType } from "../@types/context";
import { getRequestUsers } from "../store/actions/getRequestUsers";
import { Context } from "../store/context";
import { Button as StyledButton } from "../styles/Button";

export const UpdateButton = () => {
  const { usersDispatch: dispatch } = useContext(Context) as ContextType;

  const onClick = () => {
    getRequestUsers({ dispatch });
  };

  return <Button onClick={onClick}>Update Users</Button>;
};

const Button = styled(StyledButton)`
  position: fixed;
  top: 0;
  right: 0;
`;
