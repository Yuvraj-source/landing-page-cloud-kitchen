import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

// Define the footer links
const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Study Resources', path: '/NotesPage' },
  { label: 'Career Services', path: '/career' },
  { label: 'Communication', path: '/communication' },
  { label: 'News and Updates', path: '/news' },
  { label: 'Community', path: '/community' },
  { label: 'Other', path: '/other' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Use', path: '/terms' },
];

// Define the component
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#FFFFE0', py: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h6" color="#000000" fontSize='1.2rem' fontWeight="bold">
              Microverse
            </Typography>
            <Typography variant="body2" fontSize='1.2rem' color="#000000">
              A community of students passionate about microbiology
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener" color="inherit" sx={{ mx: 2 }}>
              <Facebook />
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener" color="inherit" sx={{ mx: 2 }}>
              <Twitter />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" rel="noopener" color="inherit" sx={{ mx: 2 }}>
              <Instagram />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank" rel="noopener" color="inherit" sx={{ mx: 2 }}>
              <YouTube />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {footerLinks.map((link, index) => (
              <Link key={index} href={link.path} color="inherit" sx={{ mx: 2, my: 1 }}>
                {link.label}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" align="center" fontSize='1rem' sx={{ mt: 4 }}>
            Copyright © {new Date().getFullYear()}
            {' '}
            Microverse. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;