import { IUser } from "../@types/user";

type Props = {
  user: IUser;
};

export const User = ({ user }: Props) => (
  <div>
    <img src={user.picture.thumbnail} alt="photo" />
    <p>
      {`${user.name.first} ${user.name.last}`}
      <br />
      <span>{user.email}</span>
    </p>
  </div>
);
