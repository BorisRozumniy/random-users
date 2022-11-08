import styled from "styled-components";
import { IUser } from "../@types/user";

type Props = {
  user: IUser;
};

export const User = ({ user }: Props) => (
  <Wrapper>
    <Photo src={user.picture.thumbnail} alt="photo" />
    <p>
      <Name>{`${user.name.first} ${user.name.last}`}</Name>
      <br />
      <Email>{user.email}</Email>
    </p>
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.black1};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.black};
`;

const Photo = styled.img`
  border-radius: 50%;
`;

const Name = styled.span`
  font-weight: 600;
`;
const Email = styled.span`
  font-size: 14px;
`;
