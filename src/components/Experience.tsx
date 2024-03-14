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
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "next-i18next";
import { Link } from "@mui/material";
import { useCardContext } from "../contexts/CardContext";

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
  const { toggleExperienceVisibility } = useCardContext();
  const responsibilities = t("experience.current.responsibilities", {
    returnObjects: true,
  }) as string[];
  const midPoint = Math.ceil(responsibilities.length / 2);
  const firstHalf = responsibilities.slice(0, midPoint);

  const ChiaShengresponsibilities = t("experience.previous.responsibilities", {
    returnObjects: true,
  }) as string[];

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={toggleExperienceVisibility}
          >
            <CloseIcon />
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
        sx={{ padding: 1 }}
      />
      <CardContent>
        <div>
          {firstHalf.map((responsibility, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {responsibility}
            </Typography>
          ))}
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <Link href="https://www.optoma.co.uk/">
            <InsertLinkIcon />
          </Link>
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
          <CardMedia
            component="img"
            height="194"
            image="/chiaSheng.png"
            alt="chiaSheng"
            sx={{ padding: 1 }}
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
