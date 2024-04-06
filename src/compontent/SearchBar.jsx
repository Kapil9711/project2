import { Stack, TextField, Box } from "@mui/material";
import { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SeachBar = () => {
  const [width, setWidth] = useState(() => 50);
  const box = useRef();
  document.body.addEventListener("click", (e) => {
    const { left, right, bottom, top } = box.current.getBoundingClientRect();
    if (
      e.clientX < left ||
      e.clientX > right ||
      e.clientY < top ||
      e.clientY > bottom
    ) {
      console.log(true);
      setWidth(50);
    }

    console.log(e.clientX, e.clientY);
    console.log(left, right, top, bottom);
  });

  return (
    <Stack
      sx={{ minHeight: "100vh" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        ref={box}
        onClick={() => setWidth(350)}
        sx={{ position: "relative" }}
      >
        <TextField
          id="outlined-basic"
          label={width === 50 ? "" : "Search"}
          variant="outlined"
          color="secondary"
          sx={{ width: width + "px", transition: "width .6s ease-out" }}
        />
        <SearchIcon
          sx={{
            color: "hsl(0 0% 40%)",
            fontSize: "3rem",
            position: "absolute",
            top: "5%",
            right: "0",
          }}
        />
      </Box>
    </Stack>
  );
};

export default SeachBar;
