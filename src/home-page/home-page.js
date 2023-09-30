import { Box } from "@mui/material";
import React from "react";
import "./home-page.css";
import BlurCard from "../component/blur-card";
// import videoSrc from '../../public/assests/videos/vid1.mp4'

const HomePage = () => {
  return (
    <div className="home-parent-div">
      <div className="bg-filter-container"></div>
        <div className="bg-cherry-gf"></div>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%'
        }}>
            <BlurCard>
                Hello How are tou
            </BlurCard>
        </Box>
    </div>
  );
};

export default HomePage;
