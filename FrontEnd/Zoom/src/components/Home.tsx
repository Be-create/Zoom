import { AppBar, Box, Typography } from "@mui/material";
import { Options } from "./Options";
import { Notifications } from "./Notifications";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(1 41 62)",
      }}
    >
      <Navbar />
    </Box>
  );
};
