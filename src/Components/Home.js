import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar sx={{ minHeight: "50px" }} />
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2, pt: 2 }}></Box>
      <Grid container sx={{ px: 2, mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" style={{ marginTop: "5rem" }}>
            Your Favourite Food Delivered Hot & Fresh
          </Typography>
          <Typography variant="body1" className="primary-text">
            Foodie caters to your specific preferences and dietary requirements, offering you the convenience of preparing delicious, home-cooked Indian meals without compromising on health or authenticity. Our chefs utilize fresh, locally sourced ingredients and prepare them with care, ensuring that you can enjoy the taste of traditional Indian dishes that remind you of home and evoke cherished memories.
          </Typography>
          <Button variant="contained" className="secondary-button">
            Order Now <FiArrowRight />
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={BannerImage} alt="" style={{ width: "90%", height: "auto" ,marginTop: "5rem" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

