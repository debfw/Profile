"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import SchoolIcon from "@mui/icons-material/School";
import CategoryIcon from "@mui/icons-material/Category";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button, Tooltip } from "@mui/material";
import SkillsDialog from "./skillsDialog";

export default function IconAvatars() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "Profile/public/Liko Chien Resume.pdf";
    link.download = "Liko Chien Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenSkillsDialog = () => {
    setDialogOpen(true);
  };

  return (
    <Stack spacing={0} width={80}>
      <Tooltip title="Personal Projects" arrow>
        <Button
          onClick={() =>
            window.open("https://github.com/debfw/E-commerce", "_blank")
          }
        >
          <Avatar className="avatar ">
            <CategoryIcon style={{ width: 15 }} />
          </Avatar>
        </Button>
      </Tooltip>
      <Tooltip title="Skillset" arrow>
        <Button onClick={handleOpenSkillsDialog}>
          <Avatar className="avatar">
            <SchoolIcon style={{ width: 15 }} />
          </Avatar>
        </Button>
      </Tooltip>
      <SkillsDialog open={dialogOpen} onClose={handleClose} />
      <Tooltip title="Download My Resume" arrow>
        <Button onClick={handleDownloadResume}>
          <Avatar className="avatar">
            <AssignmentIcon style={{ width: 15 }} />
          </Avatar>
        </Button>
      </Tooltip>
    </Stack>
  );
}
