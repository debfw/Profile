import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "next-i18next";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ExperienceCard() {
  const [expanded, setExpanded] = React.useState(false);
  const { t } = useTranslation();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const responsibilities = t("experience.current.responsibilities", {
    returnObjects: true,
  }) as string[];
  const ChiaShengresponsibilities = t("experience.previous.responsibilities", {
    returnObjects: true,
  }) as string[];

  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={t("experience.current.company")}
        subheader={t("experience.current.title")}
      />
      <CardMedia
        component="img"
        height="194"
        image="/optoma.png"
        alt="optoma"
      />
      <CardContent>
        <div>
          {responsibilities.map((responsibility, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {responsibility}
            </Typography>
          ))}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={t("experience.previous.company")}
        subheader={t("experience.previous.title")}
      />
          <div>
            {ChiaShengresponsibilities.map((responsibility, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                {responsibility}
              </Typography>
            ))}
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
