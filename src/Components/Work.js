import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Explore our diverse menu and handpick your favorite Indian dishes, tailored to your taste preferences.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Take control of your dining schedule by selecting the frequency that suits you best, whether it's for daily meals or occasional indulgence.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Experience the speed and efficiency of our delivery service, ensuring your hot and flavorful Indian food arrives at your doorstep in no time.",
    },
  ];

  return (
    <Grid container spacing={2} style={{ marginTop: "5rem" }}>
      <Grid item xs={12}>
        <Typography variant="h4" style={{ fontSize: "3rem" , color: "#ff8c00" }}>Work</Typography>
        <Typography variant="h2">How It Works</Typography>
        <Typography variant="body1">
          Indulge in the flavors of authentic Indian cuisine delivered straight to your doorstep.
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
        {workInfoData.map((data) => (
          <Card key={data.title} style={{ width: "250px", margin: "0 1rem" }}>
            <CardMedia
              component="img"
              src={data.image}
              alt={data.title}
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>{data.title}</Typography>
              <Typography variant="body2">{data.text}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default Work;
