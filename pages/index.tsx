// Import necessary libraries and components
import { Box } from "@mui/material";
import PrimarySearchAppBar from "../src/components/bar";
import ActionAreaCard from "../src/components/card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import LongTextSnackbar from "../src/components/snackbar";

// Define the page component, potentially rename `App` to reflect the page's purpose if it's not the main app entry
function HomePage() {
  return (
    <Box sx={{ margin:'30px' }}>
      <PrimarySearchAppBar />
      <ActionAreaCard />
      <LongTextSnackbar/>
    </Box>
  );
}

// Fetches the necessary translations for the page
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
};

export default HomePage;
