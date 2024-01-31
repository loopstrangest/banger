/** @format */

import React from "react";
import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";

const PostTable = ({ messages, setMessages, level }) => {
  const getEmoji = (rating) => {
    if (rating === 0) {
      return "👎";
    } else if (rating >= 5) {
      return "⭐";
    } else if (rating === 1) {
      return "🔥";
    } else if (rating === 2) {
      return "🔥🔥";
    } else if (rating === 3) {
      return "🔥🔥🔥";
    } else if (rating === 4) {
      return "🔥🔥🔥🔥";
    } else {
      return Array(Math.min(rating, 5)).fill("🔥").join("");
    }
  };

  const clearTable = () => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [level]: [],
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {messages && messages.length > 0 && (
        <Box
          sx={{
            marginX: 3,
            maxWidth: ["90%", "600px"],
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginBottom: "4px",
              marginRight: "4px",
              justifyContent: "right",
              cursor: "pointer",
              color: "white",
            }}
            onClick={clearTable}
          >
            Clear Table
          </Box>

          <Table
            sx={{
              border: "2px solid white",
              color: "white",
              backgroundColor: "black",
              fontColor: "white",
              cursor: "default",
              "& .MuiTableCell-root": {
                userSelect: "none",
              },
              "& .MuiTableRow-root": {
                borderLeft: "1px solid white",
                borderRight: "1px solid white",
                borderBottom: "1px solid white",
              },
            }}
          >
            <TableBody>
              {[...messages].reverse().map((message, index) => (
                <React.Fragment key={index}>
                  <TableRow sx={{ color: "white" }}>
                    <TableCell
                      sx={{
                        textAlign: "center",
                        whiteSpace: "normal",
                        fontSize: "24px",
                        alignItems: "center",
                        justifyContent: "center",
                        lineHeight: "1.5em",
                        overflow: "hidden",
                        width: "3em",
                      }}
                    >
                      {getEmoji(message.rating)
                        .match(/.{1,2}/g)
                        .join("\n")}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        userSelect: "none",
                      }}
                    >
                      {message.text}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default PostTable;
