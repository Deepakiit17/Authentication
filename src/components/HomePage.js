// src/components/HomePage.js

import React from "react";
import { Box, Typography, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Welcome to the Home Page!
        </Typography>
        <Typography component="p" variant="body1">
          You have successfully logged in.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
