import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" style={{ marginTop: "6rem" }}>
      <div className="work-section-top">
        <p className="primary-subheading" style={{ fontSize: "3rem" }}>Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Absolutely loved the experience! The food was incredibly flavorful and exceeded my expectations. The convenience of choosing my meals and having them delivered promptly made it even better. Highly recommend.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Yuvraj S.</h2>
      </div>
    </div>
  );
};

export default Testimonial;
