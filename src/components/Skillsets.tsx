import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, IconButton } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useCardContext } from "../contexts/CardContext";
import CloseIcon from "@mui/icons-material/Close";

export default function SkillSetCard() {
  const { t } = useTranslation();
  const { toggleSkillSetVisibility } = useCardContext();

  return (
    <Card sx={{ maxWidth: 645 }}>
      <CardActionArea>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Typography gutterBottom variant="body2" component="div">
              {t("skills.languages_frameworks")}
            </Typography>
            <IconButton
              aria-label="settings"
              onClick={toggleSkillSetVisibility}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {t("skills.tools_deployment")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
