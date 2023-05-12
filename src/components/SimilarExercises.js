import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

import HorizontalScrollBar from './HorizontalScrollBar';
const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' ,mt:'30px' }} fontWeight={700} color="#000" mb="33px">
      Target similar <span style={{ color: '#b52b2b', textTransform: 'capitalize' }}>muscle groups</span> with these effective exercises
    </Typography>
    <Stack direction="row" sx={{p:'2',position:'relative'}} >
      {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>:<Loader/>}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px',mt:'30px' }} fontWeight={700} color="#000" mb="33px">
    Discover alternative exercises using the same  <span style={{ color: '#b52b2b', textTransform: 'capitalize' }}>equipments</span> 
    </Typography>
    <Stack direction="row" sx={{p:'2',position:'relative'}} >
      {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/>:<Loader/>}
    </Stack>
    </Box>
    )
}

export default SimilarExercises