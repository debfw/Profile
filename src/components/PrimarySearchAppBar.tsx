import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import DownloadIcon from "@mui/icons-material/Download";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InboxIcon from "@mui/icons-material/Inbox";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import EmailInputbox from "./EmailInputbox";
import IconAvatars from "./IconAvatars";
import { Button, useMediaQuery, useTheme } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [showAvatars, setShowAvatars] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleAvatars = () => {
    setShowAvatars(!showAvatars);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ padding: 0 }}>
        <IconButton
          size="small"
          aria-label="LinkedIn"
          color="secondary"
          href="https://www.linkedin.com/in/liko-chien-905b42293/"
          target="linkedin"
        >
          <LinkedInIcon sx={{ color: "black", marginRight:1 }} />
          LinkedIn
        </IconButton>
      </MenuItem>
      <MenuItem sx={{ padding: 0}}>
        <IconButton
          size="small"
          edge="end"
          aria-label="Github"
          color="secondary"
          href="https://github.com/debfw?tab=overview&from=2024-03-01&to=2024-03-10"
        >
          <GitHubIcon sx={{ color: "black" , marginRight:1}} />
          GitHub
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, color: "black" }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <IconButton
            onClick={() => toggleAvatars()}
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          {isSmallScreen ? (
            <Box sx={{ position: "absolute", left: 0, bottom: 60 }}>
              {" "}
              {showAvatars ? <IconAvatars /> : null}
            </Box>
          ) : (
            <Box sx={{ position: "absolute", left: -80, top: 10 }}>
              {" "}
              {showAvatars ? <IconAvatars /> : null}
            </Box>
          )}

          <Button
            variant="contained"
            component="a"
            href="/resume.pdf"
            download="resume.pdf"
            sx={{
              backgroundColor: "white",
              color: "black",
              margin: 1,
            }}
          >
            {isSmallScreen ? <DownloadIcon /> : "Download My Resume"}
          </Button>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="My skill"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="Inbox"
              color="inherit"
              onClick={handleOpenDialog}
            >
              <InboxIcon />
            </IconButton>

            <IconButton
              size="large"
              aria-label="LinkedIn"
              color="inherit"
              href="https://www.linkedin.com/in/liko-chien-905b42293/"
              target="linkedin"
            >
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="Github"
              // aria-controls={menuId}
              // aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
              href="https://github.com/debfw?tab=overview&from=2024-03-01&to=2024-03-10"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Dialog onClose={handleCloseDialog} open={isDialogOpen}>
        <DialogTitle>Let's chat</DialogTitle>
        <List sx={{ pt: 0 }}>
          {/* <ListItem disableGutters key={email}> */}
          <EmailInputbox />
          {/* <ListItemButton onClick={() => handleCloseDialog()}> */}
          {/* <ListItemText primary={email} /> */}
          {/* </ListItemButton> */}
          {/* </ListItem> */}
        </List>
      </Dialog>
    </Box>
  );
}
