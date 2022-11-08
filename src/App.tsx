import { UpdateButton } from "./components/UpdateButton";
import { Users } from "./components/Users";
import { AppProvider } from "./store/context";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-style";

export const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Users />
        <UpdateButton />
      </ThemeProvider>
      <GlobalStyle />
    </AppProvider>
  );
};
