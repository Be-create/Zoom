import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export const SearchBar = () => {
  return (
    <Box>
      <TextField
        size="small"
        sx={{
          backgroundColor: "rgb(24 8 51)",
          borderRadius: "20px",
          paddingX: "5px",
          color: "white",
          "& .MuiInputBase-input": {
            color: "white",
          },
          display: "flex",
          alignItems: "center",
        }}
        InputProps={{
          disableUnderline: true,
          //   placeholder:(<Typography>Search</Typography>),
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "rgb(50 42 65)" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <Typography sx={{ color: "grey" }} variant="subtitle2">
              CTRL+F
            </Typography>
          ),
        }}
        placeholder="Search"
        variant="standard"
      />
    </Box>
  );
};
