import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0CAF60",
    },
    background: {
      default: "#111820",
      paper: "#161D27",
    },
    text: {
      primary: "#FCFCFC",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
  },
  typography,
});

export default theme;
