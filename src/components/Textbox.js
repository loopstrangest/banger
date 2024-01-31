/** @format */
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  TextField,
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  Fade,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  levelOneLogic,
  levelTwoLogic,
  levelThreeLogic,
  levelFourLogic,
  levelFiveLogic,
  levelSixLogic,
  levelSevenLogic,
  levelEightLogic,
  levelNineLogic,
  levelTenLogic,
  levelElevenLogic,
  levelTwelveLogic,
  levelThirteenLogic,
  levelFourteenLogic,
  levelFifteenLogic,
  levelSixteenLogic,
} from "../functions/testing";

const Textbox = ({
  level,
  setMessages,
  maxLevelComplete,
  setMaxLevelComplete,
}) => {
  const defaultLevelText = {
    1: "How does someone make a banger, exactly? How is it created?",
    2: "It's an oddly simple game, but, it's compelling. You simply must discover the rule.",
    3: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    4: "The world, that understandable and lawful world, was slipping away.",
    5: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness...",
    6: "The answer to the ultimate question of life, the universe and everything is 42.",
    7: "Most men and women will grow up to love their servitude and will never dream of revolution.",
    8: "So we beat on, boats against the current, borne back ceaselessly into the past.",
    9: "Thank you for your patronage, friend 🤗",
    10: "Good luck hotshot. I wonder what your approach is to finding these rules. Methodical? Random? A mix of both? In any case, things like this which generate so-called aha moments are so satisfying to me. I hope you feel the same exact way.",
    11: "What's my woo stack? I THINK THOUGHTS. I'm serious, do you know how powerful thoughts are? Every constructed object was initially a thought in someone's mind. Everything you've ever sought, it all began as a thought. It is in your interest to have high-quality thoughts.",
    12: "I'm writing these off the cuff at this point, but they live here forever. Wow, there's a cardinal outside my window and it is gorgeous, the jittering red hopping among the green, pecking at the branches. The splendor of natural beauty.",
    13: "Let's turn up the heat some for the last four levels. From here to the end, the level's rule is applied to every unique pair of sequential words. If a message is 'one two three', then 'one two' will be checked, as well as 'two three', but not 'one three'. I hope that makes sense.",
    14: "It's about the unique pairs now! Like truth / beauty. Or being / doing. Oh I just figured out a fun rule! It's devious and tricky! But it can't be too obscure. There's a balance to strike.",
    15: "Part of me wants to share something electric here, like a reward for you persistent few beyond the gameplay itself. Here it is: my creative efforts are an expression of love.",
    16: "And now, the final level! This game took me to some interesting places, I hope it did the same for you. Banger dances with the aha moment, and I hope you've had a few. May you be well. May you be happy. May you be at peace.",
  };
  const [text, setText] = useState(defaultLevelText[level]);
  const [open, setOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const textFieldRef = useRef(null);
  const noMessage = "👎 No.";
  const bangerMessage = "🔥🔥🔥🔥🔥 BANGER";

  useEffect(() => {
    setText(defaultLevelText[level]);
  }, [level]);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
    }
  };
  const handleSend = () => {
    if (text.length > 0) {
      let result;
      switch (level) {
        case 1:
          result = levelOneLogic(text);
          break;
        case 2:
          result = levelTwoLogic(text);
          break;
        case 3:
          result = levelThreeLogic(text);
          break;
        case 4:
          result = levelFourLogic(text);
          break;
        case 5:
          result = levelFiveLogic(text);
          break;
        case 6:
          result = levelSixLogic(text);
          break;
        case 7:
          result = levelSevenLogic(text);
          break;
        case 8:
          result = levelEightLogic(text);
          break;
        case 9:
          result = levelNineLogic(text);
          break;
        case 10:
          result = levelTenLogic(text);
          break;
        case 11:
          result = levelElevenLogic(text);
          break;
        case 12:
          result = levelTwelveLogic(text);
          break;
        case 13:
          result = levelThirteenLogic(text);
          break;
        case 14:
          result = levelFourteenLogic(text);
          break;
        case 15:
          result = levelFifteenLogic(text);
          break;
        case 16:
          result = levelSixteenLogic(text);
          break;
        default:
          break;
      }

      switch (result) {
        case 0:
          setPopupMessage(noMessage);
          break;
        case 1:
          setPopupMessage("🔥 Good!");
          break;
        case 2:
          setPopupMessage("🔥🔥 Great!");
          break;
        case 3:
          setPopupMessage("🔥🔥🔥 Awesome!");
          break;
        case 4:
          setPopupMessage("🔥🔥🔥🔥 Outstanding!");
          break;
        default:
          setPopupMessage(bangerMessage);
          setTimeout(() => {
            if (maxLevelComplete < level) {
              setMaxLevelComplete(level);
            }
          }, 1500);
          break;
      }

      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        setMessages((prevMessages) => ({
          ...prevMessages,
          [level]: [...(prevMessages[level] || []), { text, rating: result }],
        }));
      }, 1500);
    }
  };

  return (
    <Box
      sx={{
        width: ["80%", "400px"],
        height: "210px",
        borderRadius: "10px",
        outline: "5px solid #1DA1F2",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        ref={textFieldRef}
        value={text}
        onChange={handleChange}
        variant="outlined"
        multiline
        rows={6}
        inputProps={{ maxLength: 280 }}
        fullWidth
        style={{
          height: "inherit",
          borderRadius: "20px",
        }}
        InputProps={{
          style: {
            color: "white",
            backgroundColor: "black",
            borderRadius: "10px",
          },
          focused: {
            borderColor: "black",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleSend();
          }}
          sx={{
            maxWidth: "48px",
            minWidth: "48px",
            backgroundColor: "transparent",
            borderRadius: "10px",
            boxShadow: "none",
            marginLeft: "4px",
            color: text.length > 0 ? "white" : "grey",
            "&:hover": {
              backgroundColor: "#111111",
              boxShadow: "none",
            },
          }}
        >
          <SendIcon />
        </Button>
        {text.length > 0 && (
          <CircularProgress
            variant="determinate"
            value={(text.length / 280) * 100}
            size={24}
            thickness={22}
            style={{
              color:
                text.length > 275
                  ? "red"
                  : text.length > 260
                  ? "yellow"
                  : "#1DA1F2",
            }}
          />
        )}
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Fade}
        transitionDuration={{ enter: 375, exit: 375 }}
      >
        <DialogTitle
          style={{
            width: "250px",
            margin: "auto",
            textAlign: "center",
            borderRadius: "0px",
            backgroundColor: "#1da1f2",
            color: popupMessage === noMessage ? "black" : "white",
            background:
              popupMessage === bangerMessage
                ? "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)"
                : popupMessage === noMessage
                ? "white"
                : "#1da1f2",
            backgroundSize:
              popupMessage === bangerMessage ? "300% 300%" : "auto",
            animation:
              popupMessage === bangerMessage
                ? "rainbow 2s linear infinite"
                : "none",
          }}
        >
          {popupMessage.split(" ").map((item, i) => (
            <Typography
              style={{
                margin: 0,
                userSelect: "none",
                fontSize: "36px",
                fontWeight: "bold",
                WebkitTextStroke:
                  popupMessage === bangerMessage ? "2px black" : "0px black",
              }}
              key={i}
            >
              {item}
            </Typography>
          ))}
        </DialogTitle>
      </Dialog>
    </Box>
  );
};

export default Textbox;
