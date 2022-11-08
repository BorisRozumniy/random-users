import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ContextType } from "../@types/context";
import { getRequestUsers } from "../store/actions/getRequestUsers";
import { Context } from "../store/context";
import { Container } from "../styles/Container";
import { User } from "./User";

export const Users = () => {
  const { usersDispatch: dispatch, usersState } = useContext(
    Context
  ) as ContextType;

  useEffect(() => {
    getRequestUsers({ dispatch });
  }, []);

  return (
    <Container>
      <h1>Users</h1>
      <List>
        {usersState.users.map((user) => (
          <User key={user.id.value || user.name.last} user={user} />
        ))}
      </List>
    </Container>
  );
};

const List = styled.div`
  display: grid;
  grid-gap: 5px;
  @media only screen and (min-width: 620px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
