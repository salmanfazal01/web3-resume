import { Card, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomPaper from "../components/CustomPaper.jsx";
import resumeData from "../lib/resumeData.js";

const { projects } = resumeData;

const tabs = [...new Set(projects.map((item) => item.tag))];

const ProjectCard = () => <Card>a</Card>;

const Projects = () => {
  const [tabValue, setTabValue] = useState("All");

  return (
    <CustomPaper>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 3 }}
      >
        <Typography variant="h5">Recent Projects</Typography>

        <Tabs
          value={tabValue}
          onChange={(e, v) => setTabValue(v)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label={"All"}
            value={"All"}
            sx={{ minWidth: 0, fontWeight: 300 }}
          />

          {tabs.map((tag) => (
            <Tab
              label={tag}
              value={tag}
              key={tag}
              sx={{ minWidth: 0, fontWeight: 300 }}
            />
          ))}
        </Tabs>
      </Stack>

      <Grid container spacing={2}>
        {projects
          ?.filter((i) => (tabValue === "All" ? true : i.tag === tabValue))
          .map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <ProjectCard {...item} />
            </Grid>
          ))}
      </Grid>
    </CustomPaper>
  );
};

export default Projects;
