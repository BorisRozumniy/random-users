import { UpdateButton } from "./components/UpdateButton";
import { Users } from "./components/Users";
import { AppProvider } from "./store/context";

export const App = () => {
  return (
    <AppProvider>
      <Users />
      <UpdateButton />
    </AppProvider>
  );
};
