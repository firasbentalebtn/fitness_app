import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";
import HeroBannerImage from '../assets/images/undraw_fitness_stats_sht6.svg';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "221px", xs: "80px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="25px"
    >
      <Typography color="#b52b2b" fontWeight="600" fontSize="28px">
        Fitness Group
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "45px", xs: "40px" },
        }} mb="25px" mt="30px"
      >
        Train,Rest <br /> and Repeat
      </Typography>
      <Typography mb={3} fontSize="25px" lineHeight="35px">
        Find the perfect exercises
      </Typography>
      <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#b52b2b', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore </a>
    </Stack>
   
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
