import { styled, withTheme } from "@mui/material/styles";
import { Button, Typography, Avatar } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  // backgroundColor: theme.palette.secondary.testing,

  //   "&.MuiButton-outlined": {
  //     fontSize: "100px",
  //   },

  //   "&.MuiButton-containedSecondary": {
  //     margin: "5%",
  //   },

  "&:hover": {
    // backgroundColor: "#ffffff",
  },

  "&:focus": {
    backgroundColor: theme.palette.secondary.testing,
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  //backgroundColor: theme.palette.testing.main,
  "&.MuiAvatar-circular": {
    backgroundColor: theme.palette.testing.main,
  },

  "&.MuiAvatar-square": {
    backgroundColor: theme.palette.secondary.main,
  },
}));
