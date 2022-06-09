import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Block from "./block";
import NestedBlock from "./nestedBlock";
import { red, green, yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
      secondary: yellow[500],
    },
  },
  spacing: 5,
});

function App() {
  return (
    //RESPONSIVE GRID VIEW (SMARTPHONE, TABLET, WEB)
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.secondary.secondary,
        }}
      >
        <Block />
        <Block />
        <Block />
        <Block />
        <NestedBlock />
        <NestedBlock />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
