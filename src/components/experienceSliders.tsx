import * as React from "react";
import { useTranslation } from "next-i18next";
import { Typography, Box, IconButton } from "@mui/material";
import SlideIcon from "@mui/icons-material/ArrowForward";

export default function ExperienceSliders() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const experiences = {
    current: {
      title: t("experience.current.title"),
      company: t("experience.current.company"),
      period: t("experience.current.period"),
      responsibilities: t("experience.current.responsibilities", {
        returnObjects: true,
      }) as string[],
    },
    previous1: {
      title: t("experience.previous1.title"),
      company: t("experience.previous1.company"),
      period: t("experience.previous1.period"),
      responsibilities: t("experience.previous1.responsibilities", {
        returnObjects: true,
      }) as string[],
    },
    previous2: {
      title: t("experience.previous2.title"),
      company: t("experience.previous2.company"),
      period: t("experience.previous2.period"),
      responsibilities: t("experience.previous2.responsibilities", {
        returnObjects: true,
      }) as string[],
    },
  };

  const experienceKeys = Object.keys(experiences) as Array<
    keyof typeof experiences
  >;
  const handleSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experienceKeys.length);
  };
  const currentExperience = experiences[experienceKeys[currentIndex]];

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
      id="ExperienceCard"
    >
      <Typography variant="subtitle2" gutterBottom>
        {t("experience.current.title")} - {t("experience.current.company")}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {t("experience.current.period")}
      </Typography>
      <Typography variant="caption">Responsibilities:</Typography>
      <ul>
        {currentExperience.responsibilities.map((responsibilities, index) => {
          return (
            <li key={index}>
              <Typography variant="caption">{responsibilities}</Typography>
            </li>
          );
        })}
      </ul>
      <IconButton onClick={handleSlide}>
        <SlideIcon />
      </IconButton>
    </Box>
  );
}
