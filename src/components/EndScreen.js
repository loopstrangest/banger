/** @format */

import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { Twitter, Home, Mail } from "@mui/icons-material";

const EndScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(29, 161, 242, 1)",
        borderRadius: "8px",
        border: "1px solid white",
        boxShadow: "0px 0px 32px white",
        color: "white",
        p: 4,
      }}
    >
      <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
        You wrote so many bangers!
      </Typography>
      <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
        Thanks for playing 🤗
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <IconButton
          aria-label="twitter"
          onClick={() =>
            window.open("https://twitter.com/strangestloop", "_blank")
          }
          sx={{ color: "white", mx: 1 }}
        >
          <Twitter sx={{ fontSize: "48px" }} />
        </IconButton>
        <IconButton
          aria-label="home"
          onClick={() => window.open("https://strangestloop.io", "_blank")}
          sx={{ color: "white", mx: 1 }}
        >
          <Home sx={{ fontSize: "48px" }} />
        </IconButton>
        <IconButton
          aria-label="mail"
          onClick={() =>
            window.open("mailto:loopstrangest@gmail.com", "_blank")
          }
          sx={{ color: "white", mx: 1 }}
        >
          <Mail sx={{ fontSize: "48px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EndScreen;
