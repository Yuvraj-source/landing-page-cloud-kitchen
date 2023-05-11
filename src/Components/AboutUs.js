// Import React and MUI components
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Aboutus from '../Assets/Aboutus.png';


function AboutUs() {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      
      <Box sx={{ mt: 2, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '2rem', color: 'primary.main' }}>
        About Us
      </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto', fontSize: '1.5rem' }}>
          We believe in fostering a community of microbiology enthusiasts
          and providing a platform for you to connect, collaborate, and learn from
          one another. We believe that by connecting students with each other and with experts in the field, we can help them achieve their academic and professional goals.
        </Typography>
      </Box>
      <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '2rem', color: 'primary.main' }}>
      Join us and become a part of our vibrant community today!
      </Typography>
      <Button variant="contained" color="primary" size="small" sx={{ width: 200, height: 60, margin: 2 }} alignSelf="center" mt={4} >
  Join our community
</Button>

<Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "70%" }}>
  <img src={Aboutus} alt="Boy pointing his finger" style={{ flex: 1 }} />
  <Typography variant="body2" align="right" sx={{ fontWeight: "bold", flex: 1, textAlign: "right",fontSize: 25,fontFamily: 'Roboto', fontStyle: "italic"   }}>
    Thank you for visiting our website, and we hope that you find it useful in your journey towards mastering the field of microbiology.
  </Typography>
</Box>

</Box>

); }


export default AboutUs;