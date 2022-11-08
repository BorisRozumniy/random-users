import { UpdateButton } from "./components/UpdateButton";
import { Users } from "./components/Users";
import { AppProvider } from "./store/context";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Users />
        <UpdateButton />
      </ThemeProvider>
    </AppProvider>
  );
};
