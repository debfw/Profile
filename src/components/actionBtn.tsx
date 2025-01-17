"use client";
import { Box, Button } from "@mui/material";

export const ActionButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => (
  <Box className="avatar-container" style={{ marginTop: 10 }}>
    <Button onClick={onClick} className="snackbar-button">
      {label}
    </Button>
  </Box>
);
