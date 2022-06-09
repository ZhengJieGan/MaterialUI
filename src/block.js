import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 5,

  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: false, // No more ripple, on the whole application 💣!
        sx: { backgroundColor: "#CB1D5A", width: "100%" },
      },
    },
  },
});

const Block = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            backgroundColor: "#CA3718",
            margin: theme.spacing(3),
            padding: theme.spacing(3),
          }}
        >
          <Typography variant="body" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur.
          </Typography>
          <Button>
            <Typography variant="button">Press me</Typography>
          </Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default Block;
