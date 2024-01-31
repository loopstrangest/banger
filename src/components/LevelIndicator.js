/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const LevelIndicator = ({ level, maxLevelComplete }) => {
  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "🏆",
  ];

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant={level === 17 ? "h2" : "h4"}
        sx={{
          color: "white",
          position: "absolute",
          zIndex: 1,
          cursor: "default",
          userSelect: "none",
          pl: level === 14 ? "4px" : "0px",
          pt: "8px",
          pr: level === 6 || level === 7 || level === 8 ? "4px" : "0px",
        }}
      >
        {romanNumerals[level - 1]}
      </Typography>

      <StarIcon
        sx={{
          fontSize: "9rem",
          color: "gold",
          opacity: level <= maxLevelComplete ? "1" : "0",
        }}
      />
    </Box>
  );
};

export default LevelIndicator;
