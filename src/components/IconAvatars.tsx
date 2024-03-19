import * as React from "react";
import { green, pink } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SchoolIcon from "@mui/icons-material/School";
import CategoryIcon from "@mui/icons-material/Category";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button } from "@mui/material";
import { useCardContext } from "../contexts/CardContext";

export default function IconAvatars() {
  const { toggleExperienceVisibility, togglePortfolioVisibility, toggleSkillSetVisibility } =
    useCardContext();
  return (
    <Stack spacing={0} width={100}>
      <Button onClick={toggleSkillSetVisibility}>
        <Avatar sx={{ bgcolor: 'lightgrey' }}>
          <CategoryIcon />
        </Avatar>
      </Button>
      <Button onClick={toggleExperienceVisibility}>
        <Avatar sx={{ bgcolor: 'lightgrey' }}>
          <SchoolIcon />
        </Avatar>
      </Button>
      <Button onClick={togglePortfolioVisibility}>
        <Avatar sx={{ bgcolor: 'lightgrey' }}>
          <AssignmentIcon />
        </Avatar>
      </Button>
    </Stack>
  );
}
