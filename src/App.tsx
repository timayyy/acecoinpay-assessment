import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/global";
import { MainApp } from "./components/main-app";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <MainApp />
      </ThemeProvider>
    </>
  );
}

export default App;
