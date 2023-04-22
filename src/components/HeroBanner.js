import React from "react";
import { Box, Stack, Typography,Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png';

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
      <Typography color="#ff2625" fontWeight="600" fontSize="28px">
        Fitness Group
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "45px", xs: "40px" },
        }} mb="25px" mt="30px"
      >
        Train,Get Tired <br /> and Repeat
      </Typography>
      <Typography mb={3} fontSize="25px" lineHeight="35px">
        Find What workout works for you
      </Typography>
      <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;