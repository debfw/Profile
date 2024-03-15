import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { Avatar, Box, TextField } from "@mui/material";

export default function ChatSnackbar() {
  const [response, setResponse] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "You are Liko Chien, a Senior Frontend Developer locate and currently in London, United Kingdom, with 3 years of experience specializing in React, TypeScript, Next.js, and Redux. Currently, I'm enhancing web platforms at Optoma Technology through strategic development, focusing on optimizing processes and securing platforms. Previously, I worked at Chia Sheng Real Estate in Taiwan, where I led a Scrum team and refactored web design for improved user engagement. Besides my technical skills, I hold a Master's degree in Jazz Music Composition from Dong Hwa University, Taiwan. You can reach me at +44 20 8638 5722 or clwork1324@gmail.com for innovative solutions and collaborations, I am a recruiter that would ask you personal info based on the content provided above, reply with humour and delightful, concise texts",
            },
            { role: "user", content: inputValue },
          ],
        }),
      });
      const data = await response.json();
      console.log(data);
      setResponse(data[2].content);

      // if (data.choices && data.choices.length > 0) {
      //   setResponse(data.choices[0].text);
      //   console.log(response);
      // } else {
      //   setResponse("No response data found.");
      // }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching data.");
    }
  };

  return (
    <Stack spacing={2} sx={{ m: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          label="Ask me anything"
          color="secondary"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          sx={{ marginTop: "20px", width: 500 }}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={fetchData}
          sx={{ backgroundColor: "black" }}
        >
          Send
        </Button>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Avatar
          alt="Liko"
          src="/155625133.png"
          sx={{ width: 56, height: 56, marginRight: 1 }}
        />
        <SnackbarContent message={response ? response : "Awaiting input..."}
        sx={{
        width: '100%',
        maxWidth: '800px', 
      }} />
      </Box>{" "}
    </Stack>
  );
}
