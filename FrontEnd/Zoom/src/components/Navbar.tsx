import { Avatar, Box, Switch, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { SearchBar } from "./SharedUi/SearchBar";
import { NotificationsActive, Refresh } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          backgroundColor: "rgb(10 67 79)",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Zoom</Typography>
      </Box>
      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          width: "100vw",
          justifyContent: "space-between",
          backgroundColor: "rgb(28 142 167)",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",

            gap: "10px",
          }}
        >
          <WestIcon sx={{ color: "rgb(72 163 179)" }} />
          <EastIcon sx={{ color: "rgb(72 163 179)" }} />
          <Refresh sx={{ color: "rgb(72 163 179)" }} />
          <SearchBar />
        </Box>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Switch
            checked
            sx={{
              "&.Mui-checked + &  .MuiSwitch-track": {
                backgroundColor: "red",
              },
            }}
          />
          <NotificationsActive sx={{ color: "rgb(72 163 179)" }} />
          <Avatar
            sx={{
              height: "30px",
              width: "30px",
              backgroundColor: "rgb(72 163 179)",
              color: "rgb(28 142 167)",
              border: "1px solid black",
            }}
            variant="circular"
            sizes="small"
          >
            <Typography variant="caption">BS</Typography>
          </Avatar>
        </Box>
      </Box>
    </Box>
  );
};
