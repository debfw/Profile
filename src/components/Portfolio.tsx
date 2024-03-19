import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, IconButton } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useCardContext } from "../contexts/CardContext";
import CloseIcon from "@mui/icons-material/Close";

export default function PortFolioCard() {
  const { t } = useTranslation();
  const { togglePortfolioVisibility } = useCardContext();

  return (
    <Card sx={{ maxWidth: 545,marginBottom:3 }}>
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
            <Typography gutterBottom variant="h5" component="div">
              Education: {t("education.degree")}
            </Typography>
            <IconButton
              aria-label="settings"
              onClick={togglePortfolioVisibility}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {t("education.major")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("education.university")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("education.period")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
