import { Box, Stack } from "@mui/material";
import React from "react";
import ProfileSection from "../../page-components/ProfileSection";
import Projects from "../../page-components/Projects";
import ServicesCards from "../../page-components/ServicesCards";
import TvChartSection from "../../page-components/TvChartSection";

const Home = () => {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      // spacing={2}
      sx={{ width: "100%", height: "100vh", overflow: "auto", pt: 2 }}
    >
      {/* Left */}
      <ProfileSection />

      {/* Main */}
      <Stack sx={{ flex: 1, height: "200vh", p: 2 }} spacing={2}>
        <ServicesCards />
        <TvChartSection />
        <Projects />
      </Stack>

      {/* Right */}
      <Box sx={{ width: 280 }}></Box>
    </Stack>
  );
};

export default Home;
