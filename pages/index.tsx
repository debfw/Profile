"use client";

import { Avatar, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import StickyHeader from "../src/components/stickyHeader";
import IconAvatars from "../src/components/IconAvatars";
import { useState } from "react";
import Chatbox from "../src/components/chatbot";
import ExperienceSliders from "../src/components/experienceSliders";

function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const openChat = () => {
    return (
      <p
        style={{
          color: "black",
          fontSize: 10,
          padding: 2,
          textTransform: "none",
        }}
      >
        CLOSE
      </p>
    );
  };
  const closeChat = () => {
    return (
      <svg width="100" height="30">
        <defs>
          <path id="curve" d="M 10 40 Q 50 10, 90 40" fill="transparent" />
        </defs>
        <text fill="black" fontSize="10">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            ChatBot
          </textPath>
        </text>
      </svg>
    );
  };
  const DesktopDisplay = () => {
    return (
      <>
        <StickyHeader />
        <Box className="desktop-chat-container">
          <Button onClick={() => setIsChatOpen(true)} className="chat-button">
            {isChatOpen ? openChat() : closeChat()}
            <Avatar alt="Liko" src="/155625133.png" className="chat-avatar" />
          </Button>

          {isChatOpen && <Chatbox setIsChatOpen={setIsChatOpen} />}
        </Box>
      </>
    );
  };
  const smallScreenDisplay = () => {
    return (
      <>
        <Box className="small-screen-header">
          <StickyHeader />
        </Box>
        <Box className="small-screen-chat-container">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="chat-button-small"
          >
            <Box className="chat-text">CHAT WITH ME</Box>
          </Button>
          <Chatbox setIsChatOpen={setIsChatOpen} />
        </Box>
        <ExperienceSliders />

        <Box sx={{ margin: 20 }}></Box>
      </>
    );
  };
  const mainDisplay = isSmallScreen ? smallScreenDisplay() : DesktopDisplay();

  return (
    <Box sx={{ width: "-webkit-fill-available" }}>
      {isSmallScreen ? null : (
        <Box sx={{ position: "fixed", top: 50 }}>
          <IconAvatars />
        </Box>
      )}

      <Box sx={{ position: "fixed", top: 50, left: 100 }}></Box>
      {mainDisplay}
    </Box>
  );
}

// Fetches the necessary translations for the page
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
      // Will be passed to the page component as props
    },
  };
};

export default HomePage;

// CSS classes to be defined in a separate CSS file
/*
.desktop-chat-container {
  margin-right: 1;
  position: fixed;
  bottom: 140;
  right: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chat-avatar {
  width: 45px;
  height: 45px;
  margin-top: 1;
}

.small-screen-header {
  margin: 1;
}

.small-screen-chat-container {
  margin-right: 1;
  position: fixed;
  z-index: 100;
  bottom: 20;
  right: 2;
  background: white;
  width: -webkit-fill-available;
}

.chat-button-small {
  display: flex;
  flex-direction: column;
}

.chat-text {
  color: black;
  font-size: 20px;
  padding: 2;
}
*/
