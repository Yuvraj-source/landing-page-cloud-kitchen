import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { orange } from "@mui/material/colors";
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  const handleMenuOpen = (text) => {
    setOpenMenu(text);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  return (
    <AppBar position="static" color="primary" style={{ backgroundColor: orange[500], borderRadius: "10px" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
        <img src={Logo} alt="Logo" style={{ maxWidth: "50%", maxHeight: "10%", width: "auto", height: "auto" }} />
        </Typography>
        <div style={{ display: "flex" }}>
          {menuOptions.map((item) => (
            <div key={item.text} style={{ marginRight: "100px" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label={item.text}
                aria-controls={item.text}
                aria-haspopup="true"
                onMouseEnter={() => handleMenuOpen(item.text)}
                onMouseLeave={handleMenuClose}
                style={{ borderRadius: "50%", padding: "10px" }}
              >
              
                {item.text}
              </IconButton>
              <Menu
                id={item.text}
                anchorEl={openMenu === item.text ? item.text : null}
                open={openMenu === item.text}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Submenu item 1</MenuItem>
                <MenuItem onClick={handleMenuClose}>Submenu item 2</MenuItem>
                <MenuItem onClick={handleMenuClose}>Submenu item 3</MenuItem>
              </Menu>
            </div>
          ))}
         
          <button className="primary-button"  style={{ width: "150px" }} >Order Now</button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
