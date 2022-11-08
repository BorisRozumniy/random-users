import styled from "styled-components";
import { IUser } from "../@types/user";
import EmailIcon from "../assets/email.svg";
import PersonIcon from "../assets/person.svg";

type Props = {
  user: IUser;
};

export const User = ({ user }: Props) => (
  <Wrapper>
    <Photo src={user.picture.thumbnail} alt="photo" />
    <p>
      <Icon src={PersonIcon} alt="Person" />
      <Name>{`${user.name.first} ${user.name.last}`}</Name>
      <br />
      <Icon src={EmailIcon} alt="Email" />
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

const Icon = styled.img`
  height: 15px;
  margin-right: 7px;
  position: relative;
  top: 3px;
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
