import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HeroSection from '../Assets/HeroSection.png';

const MicroverseHero = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6} sx={{ mt: 15 }}>
  <img src={HeroSection} alt="Petri Dish" width="75%" />
</Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="primary" gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '4rem', color: 'primary.main' }} >
            Welcome to Microverse
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mt: 2,fontFamily: 'Roboto' }} >
            Your ultimate source for all things microbiology.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2,fontFamily: 'Roboto',fontSize: '1.3rem' }}>
            Our website is designed to provide students with easy access to a range of resources, including discussion forums, chat facilities, practice papers, job portals, and much more.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2,fontFamily: 'Roboto', fontSize: '1.3rem' }}>
            At Microverse, we believe that learning should be fun and interactive. That's why we've created an online community where students can connect with each other, share their knowledge, and get the support they need to succeed.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 ,fontFamily: 'Roboto', fontSize: '1.2rem' }}>
          Whether you're a student looking to prepare for exams, a professional seeking to advance your career, or simply someone interested in microbiology, our website has something to offer for everyone.
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 4 ,fontFamily: 'Roboto' ,}}>
            Join the Microverse Community
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MicroverseHero;