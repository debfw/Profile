import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Trans, useTranslation } from "next-i18next";

const defaultTheme = createTheme();

export default function StickyHeader() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Trans i18nKey="helpLocize" t={t}>
            <Typography variant="h2">{t("summary.focus")}</Typography>
            <Typography variant="h5">{t("summary.experience")}</Typography>
          </Trans>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">{t("name")}</Typography>
            <Typography variant="h5">{t("title")}</Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
