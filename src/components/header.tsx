import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { MaterialUISwitch } from "./switch";

export default function Header() {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          About Me
        </Typography>
        {/* <MaterialUISwitch /> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "center", overflowX: "auto" }}
      >Choose Your Focus{" "}</Toolbar>
    </React.Fragment>
  );
}
