"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTranslation } from "next-i18next";
import { customTheme } from "../../styles/customTheme";
import ExperienceSliders from "./experienceSliders";

export default function StickyHeader() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={customTheme}>
      <Box className="stickyHeaderContainer">
        <CssBaseline />
        <Container component="main" className="mainContainer" maxWidth="sm">
          <div className="title">
            {t("name")}
            <br />
            <span className="subtitle">{t("title")}</span>
            <br />
            <p className="subtitle summaryText">
              <span className="summaryInnerText">
                {t("summary.experience")}
                <br />
                {t("summary.focus")}
              </span>
            </p>
          </div>
        </Container>
        <Box id="ExperienceSection" className="experienceSection">
          <ExperienceSliders />
        </Box>
        <Box component="footer" className="footerContainer">
          <Container>
            <p className="footerText contactText">{t("contact")}</p>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
