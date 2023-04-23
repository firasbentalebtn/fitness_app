import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
const Excersises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "120px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="45px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "120px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
    </Box>
  );
};

export default Excersises;
