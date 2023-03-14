import { Paper } from "@mui/material";
import React from "react";

const CustomPaper = ({ sx = {}, children, ...props }) => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        backgroundImage: "none",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
