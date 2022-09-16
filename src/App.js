import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Block from "./block";
import { red, green, yellow, blue, purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledAvatar, StyledButton } from "./styling";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
      secondary: yellow[500],
      testing: blue[900],
    },
    testing: {
      main: purple[100],
    },
  },
  spacing: 5,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: false,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          padding: "2%",
          borderRadius: "30px",
        },

        contained: {
          margin: "30px",
        },
      },
    },
  },
});

function App() {
  return (
    //RESPONSIVE GRID VIEW (SMARTPHONE, TABLET, WEB)
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <StyledButton variant="contained">testing</StyledButton>
        <StyledAvatar variant="square"/>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
