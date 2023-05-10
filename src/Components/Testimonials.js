import React from "react";
import { Grid, Typography } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import ProfilePic from "../Assets/john-doe-image.png";

const Testimonial = () => {
  return (
    <Grid container spacing={2} alignItems="center" style={{ marginTop: "6rem" }}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ color: "#ff8c00" }}>Testimonial</Typography>
        <Typography variant="h2" >What They Are Saying</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <img src={ProfilePic} alt="" style={{ width: "100%", maxWidth: "200px", height: "auto", borderRadius: "50%" }} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="body1">
              Absolutely loved the experience! The food was incredibly flavorful and exceeded my expectations. The convenience of choosing my meals and having them delivered promptly made it even better. Highly recommend.
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <AiFillStar style={{ fontSize: "2rem", color: "#ffbb00" }} />
              <AiFillStar style={{ fontSize: "2rem", color: "#ffbb00" }} />
              <AiFillStar style={{ fontSize: "2rem", color: "#ffbb00" }} />
              <AiFillStar style={{ fontSize: "2rem", color: "#ffbb00" }} />
              <AiFillStar style={{ fontSize: "2rem", color: "#ffbb00" }} />
            </div>
            <Typography variant="h4">Yuvraj S.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Testimonial;
