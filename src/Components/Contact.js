import React from "react";
import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
      <TextField
      variant="outlined"
      placeholder="yourmail@gmail.com"
      InputProps={{
        sx: {
          border: "1px solid",
          borderColor: "gray",
          borderRadius: "4px",
          height: "48px", 
          width:"500px",
          fontSize: "16px",
          marginRight: "10px",
        },
      }}
      />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;