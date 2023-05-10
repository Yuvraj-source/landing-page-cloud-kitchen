import React from "react";
import { Box } from "@mui/system";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2, pt: 2 }}>
       
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          mt: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Foodie caters to your specific preferences and dietary requirements, offering you the convenience of preparing delicious, home-cooked Indian meals without compromising on health or authenticity. Our chefs utilize fresh, locally sourced ingredients and prepare them with care, ensuring that you can enjoy the taste of traditional Indian dishes that remind you of home and evoke cherished memories.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={BannerImage} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
