"use client";
import "../styles/app.css";

import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { appWithTranslation } from "next-i18next";
import theme from "../src/theme";
import { Box } from "@mui/material";
import { CardProvider } from "../src/contexts/CardContext";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="centered-box">
          <CardProvider>
            <Component {...pageProps} />
          </CardProvider>
        </Box>
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default appWithTranslation(MyApp);
