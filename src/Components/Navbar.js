import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { orange } from "@mui/material/colors";
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  const handleButtonClick = (path) => {
    // Implement your navigation logic here
    console.log("Navigating to:", path);
  };

  return (
    <AppBar position="static" color="primary" style={{ backgroundColor: orange[500], borderRadius: "20px" }}>
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            <img
              src={Logo}
              alt="Logo"
              style={{ maxWidth: "80%", maxHeight: "100%", width: "auto", height: "auto" }}
            />
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button color="inherit" size="small" onClick={() => handleButtonClick("/home")} sx={{ mx: 1, marginRight: "100px",fontSize: "16px", fontWeight: "bold" }}>
              Home
            </Button>
            <Button color="inherit" size="small" onClick={() => handleButtonClick("/about")} sx={{ mx: 1 , marginRight: "100px",fontSize: "16px", fontWeight: "bold" }}>
              About
            </Button>
            <Button color="inherit" size="small" onClick={() => handleButtonClick("/testimonials")} sx={{ mx: 1 , marginRight: "100px",fontSize: "16px", fontWeight: "bold" }}>
              Testimonials
            </Button>
            <Button color="inherit" size="small" onClick={() => handleButtonClick("/contact")} sx={{ mx: 1  , marginRight: "100px",fontSize: "16px", fontWeight: "bold"}}>
              Contact
            </Button>
            <Button color="inherit" size="small" onClick={() => handleButtonClick("/cart")} sx={{ mx: 1 , marginRight: "100px" ,fontSize: "16px", fontWeight: "bold"}}>
              Cart
            </Button>
            <Box sx={{ mx: 1 }}>
            <Button
    color="inherit"
    variant="outlined"
    size="small"
    style={{ backgroundColor: "#fff", color: "#000", borderRadius: "20px", fontSize: "16px", fontWeight: "bold", width: "150px", height:"50px" }}
    onClick={() => handleButtonClick("/order")}
  >
    Order Now
  </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
