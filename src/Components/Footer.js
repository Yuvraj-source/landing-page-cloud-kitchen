import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer-wrapper" style={{ marginTop: "2rem" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className="footer-section-one">
            <div className="footer-logo-container">
              <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
              <BsTwitter />
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="footer-section-two">
            <div className="footer-section-columns">
              <span>Quality</span>
              <span>Help</span>
              <span>Share</span>
              <span>Careers</span>
              <span>Testimonials</span>
              <span>Work</span>
            </div>
            <div className="footer-section-columns">
              <span>987-654-321</span>
              <span>foodie@gmail.com</span>
            </div>
            <div className="footer-section-columns">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
