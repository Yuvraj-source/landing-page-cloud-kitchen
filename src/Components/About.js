import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" style={{ marginTop: "6rem" }}>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading" style={{ fontSize: "3rem" }} >About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        Our carefully crafted recipes, made with the finest ingredients and traditional cooking techniques, ensure each bite is a culinary delight. 
        </p>
        <p className="primary-text">
        Experience the convenience of having wholesome and flavorful Indian meals conveniently delivered to you, ready to be savored and enjoyed.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
