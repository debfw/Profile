import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { useTranslation } from "next-i18next";
import { Avatar, Box } from "@mui/material";

const action = (
  <Button color="secondary" size="small">
    AI assistant
  </Button>
);

export default function ChatSnackbar() {
  const { t } = useTranslation();

  return (
    <Stack spacing={2} sx={{ maxWidth: 500, mt: 3 }}>
      <SnackbarContent message="Ask Me Anything, like where are you now? " />
      <Box sx={{ display: "flex"}}>
        <Avatar
          alt="Liko"
          src="/155625133.png"
          sx={{ width: 86, height: 86 , marginRight:1}}
        />
        <SnackbarContent message={t("location")} action={action} />
      </Box>

      <SnackbarContent message="What's your focus?" />
      <Box sx={{ display: "flex" }}>
      <Avatar alt="Liko" src="/155625133.png" sx={{ width: 86, height: 86 , marginRight:1 }} />
      <SnackbarContent message={t("summary.focus")} action={action} />
      </Box>
    </Stack>
  );
}
