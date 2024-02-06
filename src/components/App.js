/** @format */
import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import LevelIndicator from "./LevelIndicator";
import NextLevel from "./NextLevel";
import PrevLevel from "./PrevLevel";
import Textbox from "./Textbox";
import PostTable from "./PostTable";
import Rules from "./Rules";
import EndScreen from "./EndScreen";
import { process } from "../functions/process";
import { config } from "../functions/config";
import { getComplete, setComplete } from "../functions/completion";

function App() {
  const [messages, setMessages] = useState({});

  const [maxLevelComplete, setMaxLevelComplete] = useState(getComplete() || 0);
  const [level, setLevel] = useState(() => {
    const storedLevel = getComplete();
    const allLevels =
      process(localStorage.getItem("banger_p") || "") === config;
    if (allLevels) {
      return Number(storedLevel) + 1;
    } else if (storedLevel >= 8) {
      return 8;
    } else {
      return Math.max(Number(storedLevel) + 1, 1);
    }
  });

  useEffect(() => {
    const storedMaxLevelComplete = getComplete();
    if (storedMaxLevelComplete && storedMaxLevelComplete > 0) {
      setMaxLevelComplete(Number(storedMaxLevelComplete));
    }
  }, []);

  useEffect(() => {
    setComplete(maxLevelComplete);
  }, [maxLevelComplete]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      sx={{
        backgroundColor: "black",
        overflowY: "scroll",
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      }}
    >
      <Rules maxLevelComplete={maxLevelComplete} />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", top: "10%" }}
      >
        <PrevLevel
          level={level}
          maxLevelComplete={maxLevelComplete}
          setLevel={setLevel}
        />

        <LevelIndicator level={level} maxLevelComplete={maxLevelComplete} />
        <NextLevel
          level={level}
          maxLevelComplete={maxLevelComplete}
          setLevel={setLevel}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {level <= 16 ? (
          <Textbox
            level={level}
            setMessages={setMessages}
            maxLevelComplete={maxLevelComplete}
            setMaxLevelComplete={setMaxLevelComplete}
          />
        ) : (
          <EndScreen />
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{ position: "absolute", top: "70%", backgroundColor: "black" }}
      >
        <PostTable
          messages={messages[level]}
          setMessages={setMessages}
          level={level}
        />
      </Box>
    </Box>
  );
}

export default App;
