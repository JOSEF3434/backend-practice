import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";

/* ---------- styled components ---------- */

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.action.hover, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.action.hover, 0.25),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

/* ---------- component ---------- */

export default function Navebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuToggle = (event) => {
    // toggle: if open, close; otherwise open anchored to target
    if (isMobileMenuOpen) setMobileMoreAnchorEl(null);
    else setMobileMoreAnchorEl(event.currentTarget);
  };

  /* ---------- menus ---------- */

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      id="mobile-menu"
      anchorEl={mobileMoreAnchorEl}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MenuItem component={Link} to="/" onClick={handleMenuClose}>
        Homepage
      </MenuItem>

      <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
        Contact Us
      </MenuItem>

      <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
        About
      </MenuItem>

      <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
        Login
      </MenuItem>

      <MenuItem component={Link} to="/signup" onClick={handleMenuClose}>
        Signup
      </MenuItem>
    </Menu>
  );

  /* ---------- UI ---------- */

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: colors.primary[500],
        }}
      >
        <Toolbar>
          {/* Left menu icon hidden on xs (we show centered icon on xs instead) */}
          <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap sx={{ display: { xs: "none", sm: "block" } }}>
            Admin Panel
          </Typography>

          {/* Centered menu icon for small screens */}
          <Box sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <IconButton
              onClick={handleMobileMenuToggle}
              color="inherit"
              sx={{ mx: "auto" }}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          {/* Desktop nav links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 2 }}>
            <Button color="inherit" component={Link} to="/" sx={{ textTransform: "none" }}>
              Homepage
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ textTransform: "none" }}>
              Contact Us
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ textTransform: "none" }}>
              About
            </Button>
            <Button color="inherit" component={Link} to="/login" sx={{ textTransform: "none", ml: 1 }}>
              Login
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/signup" sx={{ ml: 1 }}>
              Signup
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* RIGHT ICONS */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>

            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={handleProfileMenuOpen}>
              <AccountCircle />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
