"use client";

import * as React from "react";

import Button from "@mui/material/Button";
import SnackbarContent from "@mui/material/SnackbarContent";
import { Avatar, Box, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { getFeed, greetingMsg } from "../utils/Feed";
import { ActionButton } from "./actionBtn";

type ChatBoxType = {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Chatbox({ setIsChatOpen }: ChatBoxType) {
  const [inputValue, setInputValue] = React.useState("");
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputValue(event.target.value);
  };

  const getChatGptReplied = async () => {
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: getFeed(),
            },
            { role: "user", content: inputValue },
          ],
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClose = () => {
    setIsChatOpen(false);
  };

  return (
    <Dialog open={true} maxWidth="sm" fullWidth id="chatDialog">
      <Card className="chatbox-card">
        <IconButton
          onClick={handleClose}
          aria-label="close"
          className="close-button"
        >
          <CloseIcon />
        </IconButton>
        <CardContent>
          <div
            style={{ height: "auto", backgroundColor: "#f0f0f0", padding: 15 }}
          >
            <Box className="response-container">
              <Box className="avatar-container">
                <Avatar alt="Liko" src="/155625133.png" className="avatar" />
                <SnackbarContent
                  message={greetingMsg()}
                  className="snackbar-content"
                />
              </Box>
            </Box>

            {actionButtonItems.map((label) => (
              <ActionButton
                key={label}
                label={label}
                onClick={() => setInputValue(label)}
              />
            ))}
          </div>
          <Box className="input-container" sx={{ marginTop: 1.5 }}>
            <TextField
              multiline
              minRows={1}
              maxRows={1}
              label="Ask me anything..."
              color="secondary"
              variant="outlined"
              value={inputValue}
              onChange={handleChange}
              className="text-field"
            />
            <Button
              color="primary"
              variant="contained"
              onClick={getChatGptReplied}
              className="ask-button"
              style={{ fontSize: 10 }}
            >
              Ask
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  );
}

const actionButtonItems = [
  "Tech Stacks",
  "Contact Me",
  "Experience",
  "Summary",
];
