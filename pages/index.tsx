// Import necessary libraries and components
import { Avatar, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import PrimarySearchAppBar from "../src/components/PrimarySearchAppBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useCardContext } from "../src/contexts/CardContext";
import ExperienceCard from "../src/components/Experience";
import PortFolioCard from "../src/components/Portfolio";
import SkillSetCard from "../src/components/Skillsets";
import ChatSnackbar from "../src/components/ChatSnackbar";
import StickyHeader from "../src/components/stickyHeader";
import { useEffect, useState } from "react";

function HomePage() {
  const [flipAnimation, setFlipAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      console.log(bottom);
      if (bottom) {
        setFlipAnimation(true);
        setTimeout(() => setFlipAnimation(false), 1500);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const {
    isExperienceVisible,
    isPortfolioVisible,
    isSkillSetVisible,
    isSnackbarVisible,
    toggleSnackbarVisibility,
  } = useCardContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const seeTools = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <Box sx={{ flex: 1, maxWidth: "300px" }}>
        {isExperienceVisible && <ExperienceCard />}
      </Box>
      <Box sx={{ flex: 1, maxWidth: "300px" }}>
        {isPortfolioVisible && <PortFolioCard />}
      </Box>
      <Box sx={{ flex: 1, maxWidth: "300px" }}>
        {isSkillSetVisible && <SkillSetCard />}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ marginTop: "100px", width: "-webkit-fill-available" }}>
      {isSmallScreen ? (
        <>
          <Box sx={{ margin: 1 }}>
            <StickyHeader />
          </Box>
          <Box
            sx={{
              marginRight: 1,
              position: "fixed",
              zIndex: 100,
              bottom: 20,
              right: 2,
              background: "linear-gradient(155deg, black, transparent)",
            }}
          >
            <Button
              onClick={toggleSnackbarVisibility}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {isSnackbarVisible ? (
                <Box sx={{ color: "white", fontSize: 40, padding: 2 }}>X</Box>
              ) : (
                <Box sx={{ color: "white", fontSize: 40, padding: 2 }}>
                  CHAT
                </Box>
              )}
            </Button>
            {isSnackbarVisible && <ChatSnackbar />}
          </Box>
          <div
            className={`page-flip-container ${
              flipAnimation ? "animate-flip" : ""
            }`}
          >
            {<h1>Hi</h1>}
          </div>
        </>
      ) : (
        <>
          <StickyHeader />
          <Box
            sx={{
              marginRight: 1,
              position: "fixed",
              zIndex: 100,
              bottom: 100,
              right: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              onClick={toggleSnackbarVisibility}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Avatar
                alt="Liko"
                src="/155625133.png"
                sx={{ width: "20%", height: "20%" }}
              />
              {isSnackbarVisible ? (
                <Box sx={{ color: "black", fontSize: 40, padding: 2 }}>
                  CLOSE
                </Box>
              ) : (
                <Box sx={{ color: "black", fontSize: 40, padding: 2 }}>
                  CHAT
                </Box>
              )}
            </Button>
            {isSnackbarVisible && <ChatSnackbar />}
          </Box>
        </>
      )}
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
