import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <nav className="navbar">
      {isSmallScreen ? (
        <>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              className="menu-item"
              onClick={handleClose}
              component="a"
              href="#about"
            >
              About Me
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#skills">
              Skills
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#education">
              Education
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#projects">
              Projects
            </MenuItem>
          </Menu>
        </>
      ) : (
        <div className="navbar-items">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
