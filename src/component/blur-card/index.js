import { Box } from "@mui/material";
import React from "react";
import "./blur-card.css";

const BlurCard = ({ children, height, width, title }) => {
  return (
    <Box
      className="blurcard"
      sx={{
        height: height,
        width: width,
      }}
    >
      <h3 className="typography-color blur-card-title">{title}</h3>
      {children}
    </Box>
  );
};

export default BlurCard;
