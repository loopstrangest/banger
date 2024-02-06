/** @format */

import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  Box,
  FormControl,
} from "@mui/material";
import { process } from "../functions/process";
import { config } from "../functions/config";

const NextLevel = ({ level, maxLevelComplete, setLevel }) => {
  const [open, setOpen] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const handleNextLevel = () => {
    const matchConfig =
      process(localStorage.getItem("banger_p") || "") === config;
    if (level === 8 && !matchConfig) {
      setOpen(true);
    } else if (level === 8 && matchConfig) {
      setOpen(false);
      setLevel(9);
    } else {
      setLevel(level + 1);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleNextLevel}
        style={{
          color: "white",
          visibility: maxLevelComplete >= level ? "visible" : "hidden",
        }}
        disabled={maxLevelComplete < level}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          margin: "auto",
        }}
        PaperProps={{
          style: {
            width: "400px",
            backgroundColor: "#1DA1f2",
          },
        }}
      >
        {showCheckmark && (
          <CheckCircleOutlineIcon
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "8rem",
              color: "lightgreen",
              animation: "fadeInOut 0.75s ease-in-out",
              zIndex: 1,
            }}
          />
        )}
        <DialogTitle
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Eight More Levels To Play!
        </DialogTitle>
        <FormControl
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            const password = e.target.elements.password.value;
            localStorage.setItem("banger_p", password);
            if (password === "blossoming") {
              setShowCheckmark(true);
              setTimeout(() => {
                setShowCheckmark(false);
                setOpen(false);
                setLevel(9);
              }, 2000);
            }
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            sx={{ mx: 2 }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="filled"
              onChange={(e) => {}}
              sx={{ mr: 1 }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                style: { color: "white" },
                underline: {
                  "&:after": {
                    color: "white",
                  },
                },
                input: {
                  "&::after": {
                    borderBottomColor: "white",
                  },
                },
              }}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </FormControl>
        <Button
          href="https://strangestloop.gumroad.com/l/oneword"
          target="_blank"
          variant="contained"
          style={{
            margin: "20px auto",
            display: "flex",
            backgroundColor: "rgba(255, 215, 0, 0.9)",
          }}
        >
          <b>GET THE PASSWORD</b>
        </Button>
      </Dialog>
    </>
  );
};

export default NextLevel;
