import React from "react";
import { TextField, Grid } from "@mui/material";

const Contact = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "calc(100vh - 400px)", padding: "0 16px" }}
    >
      <Grid item xs={12}>
        <h1 className="primary-heading" style={{ marginTop: "1rem", fontSize: "3rem", whiteSpace: "nowrap", textAlign: "center" }}>
          Have Question In Mind? Let Us Help You
        </h1>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <div className="contact-form-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <TextField
            variant="outlined"
            placeholder="yourmail@gmail.com"
            InputProps={{
              style: {
                border: "1px solid",
                borderColor: "gray",
                borderRadius: "4px",
                height: "48px",
                width: "100%",
                fontSize: "16px",
                marginRight: "10px",
              },
            }}
          />
          <button className="secondary-button">Submit</button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
