import { AppBar, Box, Typography } from "@mui/material";
import { Options } from "./Options";
import { Notifications } from "./Notifications";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <AppBar
        sx={{
          height: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Typography>VIDEO CHAT</Typography>
      </AppBar>
      <Options>
        <Notifications></Notifications>
      </Options>
    </Box>
  );
};
