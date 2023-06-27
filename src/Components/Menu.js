import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, ButtonGroup, Button } from '@mui/material';
import background from "../Assets/FoodBackground.png";

const Menu = () => {
  const [menuType, setMenuType] = useState('vegetarian');

  const vegetarianMenu = [
    { name: 'Palak Paneer', price: '₹ 300' },
    { name: 'Vegetable Korma', price: '₹ 250' },
    { name: 'Matar Paneer', price: '₹ 250' },
    { name: 'Shahi Paneer', price: '₹ 300' },
    { name: 'Vegetable Biryani', price: '₹ 250' },
    { name: 'Dal Makhani', price: '₹ 300' },
    { name: 'Veg Kadhai', price: '₹ 200' },
    { name: 'Pav Bhaji', price: '₹ 250' },
    { name: 'Chole Bhature', price: '₹ 200'},
    { name: 'Rajma Masala ', price: '₹ 250' },
    { name: 'Aaloo Gobi ', price: '₹ 150' },
   
  ];

  const nonVegetarianMenu = [
    { name: 'Chicken Masala', price: '₹ 450' },
    { name: 'Butter Chicken', price: '₹ 350' },
    { name: 'Chicken Tandoori ', price: '₹ 350'},
    { name: ' Hyderabadi Biryani', price: '₹ 350' },
    { name: 'Fish Fry', price:'₹ 400' },
    { name: ' Murgh Kadai', price: '₹ 400' },
    { name: 'Chicken Kolhapuri ', price: '₹ 350' },
    { name: 'Mutton Rogan', price: '₹ 350' },
    { name: 'Fish Bhunna', price: '₹ 350' },
    { name: ' Fish Biryani', price: '₹ 350' },
   
 
  ];

  const handleMenuTypeChange = (type) => {
    setMenuType(type);
  };

  const getMenuItems = () => {
    return menuType === 'vegetarian' ? vegetarianMenu : nonVegetarianMenu;
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <ButtonGroup sx={{ marginBottom: '10px' }}>
        <Button
          variant={menuType === 'vegetarian' ? 'contained' : 'outlined'}
          onClick={() => handleMenuTypeChange('vegetarian')}
        >
          Vegetarian
        </Button>
        <Button
          variant={menuType === 'non-vegetarian' ? 'contained' : 'outlined'}
          onClick={() => handleMenuTypeChange('non-vegetarian')}
        >
          Non-Vegetarian
        </Button>
      </ButtonGroup>

      {getMenuItems().map((item, index) => (
        <Card key={index}  sx={{
            width: 350,
    height: 100,
    marginBottom: '10px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:"1px solid black"
    
          }}>
          <CardContent>
            <Typography variant="h6" fontFamily="Great Vibes" noWrap sx={{fontWeight:"700" }}  >
              {item.name}
            </Typography>
            <Typography variant="body1" sx={{fontWeight:"500"}}>
              Price: {item.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Menu;
