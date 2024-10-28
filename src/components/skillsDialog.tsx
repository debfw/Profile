import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const SkillsDialog: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Skills</DialogTitle>
      <DialogContent>
        <div>
          <div>
            <strong>{t("skills.languages_frameworks_title")}</strong>
            <div style={{ fontSize: "0.8em", fontWeight: "300" }}>
              {t("skills.languages_frameworks")}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <strong>{t("skills.tools_deployment_title")}</strong>
            <div style={{ fontSize: "0.8em", fontWeight: "300" }}>
              {t("skills.tools_deployment")}
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SkillsDialog;
