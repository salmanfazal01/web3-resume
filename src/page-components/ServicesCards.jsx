import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";
import CustomPaper from "../components/CustomPaper.jsx/index.jsx";
import resumeData from "../lib/resumeData.js";

const { services } = resumeData;

const ServicesCards = () => {
  return (
    <Grid container spacing={2}>
      {services.map((item, i) => (
        <Grid item xs={6} md={3} lg={2.4} key={i}>
          <CustomPaper sx={{ height: "100%" }}>
            <Stack spacing={2} sx={{ height: "100%" }}>
              <Typography variant="h4">{item.title}</Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                <item.icon sx={{ fontSize: 18 }} />

                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Stack>

              <LinearProgress variant="determinate" value={item.percent} />
            </Stack>
          </CustomPaper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesCards;
