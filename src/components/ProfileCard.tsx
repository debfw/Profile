import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useTranslation } from "next-i18next";
export default function ProfileCard() {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 645 }}>
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "row" , justifyContent:'space-between'}}>
            {" "}
            <Typography gutterBottom variant="h5" component="div">
              {t("title")}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {t("summary.focus")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
