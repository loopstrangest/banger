/** @format */

import { Modal, IconButton, Typography, Box } from "@mui/material";
import { QuestionMark, Twitter, Home, Mail } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Rules = ({ maxLevelComplete }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!maxLevelComplete || maxLevelComplete < 1) {
      setOpen(true);
    }
  }, [maxLevelComplete]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        aria-label="open rules"
        component="span"
        onClick={handleOpen}
        style={{
          color: "white",
          opacity: 0.5,
          position: "fixed",
          top: 1,
          right: 1,
        }}
      >
        <QuestionMark sx={{ fontSize: "36px" }} />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(80%, 400px)",
            bgcolor: "rgba(29, 161, 242, 1)",
            borderRadius: "8px",
            border: "1px solid white",
            boxShadow: "0px 0px 32px white",
            p: 4,
            color: "white",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", fontStyle: "italic" }}
          >
            How to Play Banger
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Each level has a unique, hidden rule.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Every english word either follows or doesn't follow the rule. The
            number of fires matches the number of unique words that follow the
            rule.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Discover the rule and submit a message that includes{" "}
            <b>five different english words</b> that follow the rule to beat the
            level.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The default text for each level is your hint.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            A modification to these rules occurs for the last four levels, the
            modification is explained then.
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
              component="span"
              onClick={() =>
                window.open("https://twitter.com/strangestloop", "_blank")
              }
            >
              <Twitter sx={{ fontSize: "48px", color: "white" }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="home"
              component="span"
              onClick={() => window.open("https://strangestloop.io", "_blank")}
            >
              <Home sx={{ fontSize: "48px", color: "white" }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="mail"
              component="span"
              onClick={() =>
                window.open("mailto:loopstrangest@gmail.com", "_blank")
              }
            >
              <Mail sx={{ fontSize: "48px", color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Rules;
