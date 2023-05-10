import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: " Explore our diverse menu and handpick your favorite Indian dishes, tailored to your taste preferences.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Take control of your dining schedule by selecting the frequency that suits you best, whether it's for daily meals or occasional indulgence. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Experience the speed and efficiency of our delivery service, ensuring your hot and flavorful Indian food arrives at your doorstep in no time.",
    },
  ];
  return (
    <div className="work-section-wrapper" style={{ marginTop: "8rem" }}>
      <div className="work-section-top">
        <p className="primary-subheading" style={{ fontSize: "3rem" }}>Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Indulge in the flavors of authentic Indian cuisine delivered straight to your doorstep.
        </p>
      </div>
      <div className="work-section-bottom" style={{ marginTop: "2rem" }}>
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;