import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Block from "./block";

const NestedBlock = () => {
  return (
    <Grid
      container
      item
      direction="row"
      xs={12}
      sm={6}
      md={4}
      sx={{ backgroundColor: "#21B6B3" }}
    >
      <Block />
      <Block />
      <Block />
    </Grid>
  );
};

export default NestedBlock;
