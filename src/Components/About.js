import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: "6rem" }}>
      <Grid item md={6} xs={12}>
        <img src={AboutBackgroundImage} alt="" style={{ width: "80%" }} />
      </Grid>
      <Grid item md={6} xs={12}>
        <Typography variant="h4" style={{ color: "#ff8c00" }}>About</Typography>
        <Typography variant="h2">
          Food Is An Important Part Of A Balanced Diet
        </Typography>
        <Typography variant="body1">
          Our carefully crafted recipes, made with the finest ingredients and traditional cooking techniques, ensure each bite is a culinary delight.
        </Typography>
        <Typography variant="body1">
          Experience the convenience of having wholesome and flavorful Indian meals conveniently delivered to you, ready to be savored and enjoyed.
        </Typography>
        <div style={{ marginTop: "2rem" }}>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<BsFillPlayCircleFill />}
            style={{ marginLeft: "1rem" }}
          >
            Watch Video
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
