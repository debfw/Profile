// Import necessary libraries and components
import { Box } from "@mui/material";
import PrimarySearchAppBar from "../src/components/PrimarySearchAppBar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import ProfileCard from "../src/components/ProfileCard";
import ChatSnackbar from "../src/components/snackbar";
import { useCardContext } from "../src/contexts/CardContext";
import ExperienceCard from "../src/components/Experience";
import PortFolioCard from "../src/components/Portfolio";
import SkillSetCard from "../src/components/Skillsets";
import Header from "../src/components/header";

function HomePage() {
  const { isExperienceVisible, isPortfolioVisible, isSkillSetVisible } =
    useCardContext();

  return (
    <Box sx={{ marginTop: "200px" }}>
      <Header />
      <PrimarySearchAppBar />
      <ProfileCard />
      <ChatSnackbar />
      <Box sx={{ "& > *:not(:first-child)": { mt: 5 } }}>
        {isExperienceVisible && <ExperienceCard />}
        {isPortfolioVisible && <PortFolioCard />}
        {isSkillSetVisible && <SkillSetCard />}
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
