// Import necessary libraries and components
import {
  Avatar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PrimarySearchAppBar from "../src/components/PrimarySearchAppBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import ProfileCard from "../src/components/ProfileCard";
import { useCardContext } from "../src/contexts/CardContext";
import ExperienceCard from "../src/components/Experience";
import PortFolioCard from "../src/components/Portfolio";
import SkillSetCard from "../src/components/Skillsets";
import Header from "../src/components/header";
import ChatSnackbar from "../src/components/ChatSnackbar";

function HomePage() {
  const {
    isExperienceVisible,
    isPortfolioVisible,
    isSkillSetVisible,
    isSnackbarVisible,
    toggleSnackbarVisibility,
  } = useCardContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ marginTop: "100px" }}>
      {isSmallScreen ? (
        <Box sx={{ margin: 1 }}>
          {" "}
          <Header />
          <PrimarySearchAppBar />
          <ProfileCard />
        </Box>
      ) : (
        <>
          <Header />
          <PrimarySearchAppBar />
          <ProfileCard />
        </>
      )}

      {isSmallScreen ? (
        <Box
          sx={{
            marginRight: 1,
            position: "fixed",
            zIndex: 100,
            display: "flex",
            flexDirection: "row",
            bottom: 20,
            right: 2,
          }}
        >
          <Button onClick={toggleSnackbarVisibility}>
            {isSnackbarVisible ? null : (
              <Avatar
                alt="Liko"
                src="/155625133.png"
                sx={{ width: "73px", height: "73px" }}
              />
            )}
          </Button>
          {isSnackbarVisible && <ChatSnackbar />}
        </Box>
      ) : (
        <Box
          sx={{
            marginRight: 1,
            position: "fixed",
            zIndex: 100,
            bottom: 100,
            right: 2,
          }}
        >
          <Button onClick={toggleSnackbarVisibility}>
            <Avatar
              alt="Liko"
              src="/155625133.png"
              sx={{ width: "40%", height: "40%" }}
            />{" "}
            <Typography
              sx={{
                position: "absolute",
                bottom: "60px",
                right: "110px",
                width: "50%",
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                p: "4px", // This is the shorthand for padding in all directions
              }}
            >
              {isSnackbarVisible
                ? "Click again to close "
                : "Click and ask me anything"}
            </Typography>{" "}
          </Button>
          {isSnackbarVisible && <ChatSnackbar />}
        </Box>
      )}

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
