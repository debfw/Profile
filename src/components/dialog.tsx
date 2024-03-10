import * as React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { useTranslation } from "next-i18next"

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { t } = useTranslation();
  const emails = [t("email"), t("contact"), t("location")];
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Challenge me</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
interface SimpleDialogDemoProps {
  child: React.ReactElement; // Use ReactElement for components
}
export default function SimpleDialogDemo({ child }: SimpleDialogDemoProps) {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const emails = [t("email"), t("contact"), t("location")];
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{ flexGrow: 0, flexBasis: "48px" }}>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ color: "white", mx: 0, width: "48px" }}
      >
        {React.cloneElement(child, {})}{" "}
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
