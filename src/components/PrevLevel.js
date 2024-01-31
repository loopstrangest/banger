/** @format */

import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const PrevLevel = ({ level, maxLevelComplete, setLevel }) => {
  return (
    <>
      {level >= 2 ? (
        <IconButton
          onClick={() => setLevel(level - 1)}
          style={{ color: "white" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => setLevel(level - 1)}
          style={{ color: "white", visibility: "hidden" }}
          disabled
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}
    </>
  );
};

export default PrevLevel;
