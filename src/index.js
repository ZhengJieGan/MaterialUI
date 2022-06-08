import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "@mui/material/GlobalStyles";
//import { ThemeProvider, createTheme } from "@mui/system";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles styles={{ body: { color: "#B9CB1D" } }} />
    <App />
  </React.StrictMode>
);
