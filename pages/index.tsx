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
        <Box
          className="desktop-chat-container"
          style={{ position: "absolute", right: 10, top: 500 }}
        >
          <Button onClick={() => setIsChatOpen(true)} className="chat-button">
            {isChatOpen ? openChat() : closeChat()}
            <Avatar alt="Liko" src="/155625133.png" className="chat-avatar" />
          </Button>
          {isChatOpen ? <Chatbox setIsChatOpen={setIsChatOpen} /> : null}
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
          {isChatOpen ? <Chatbox setIsChatOpen={setIsChatOpen} /> : null}
        </Box>
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
