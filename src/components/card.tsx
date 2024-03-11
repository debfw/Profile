import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useTranslation } from "next-i18next";
export default function ActionAreaCard() {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 645 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="155625133.png"
          alt={t("name")}
          sx={{
            height: 100,
            width: 100,
            borderRadius: "50%",
            position:'fixed',
            right:50,
            top:230,
          }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {t("title")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("summary.focus")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
