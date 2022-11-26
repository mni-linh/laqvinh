import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import RoutesApp from "./routes/RoutesApp";
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <RoutesApp />{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
