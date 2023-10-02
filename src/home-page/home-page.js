import { Box } from "@mui/material";
import React from "react";
import "./home-page.css";
import BlurCard from "../component/blur-card";
import ProfilePicCard from "../component/profile-pic";
// import videoSrc from '../../public/assests/videos/vid1.mp4'

const HomePage = () => {
  return (
    <div className="home-parent-div">
      <div className="bg-filter-container"></div>
      <div className="bg-cherry-gf"></div>
      <Box
        sx={{
          display: "flex",
          // alignItems: "space-between",
          justifyContent: "space-between",
          flexDirection: "column",
          // border: "1px solid black",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            // flexDirection: "column",
            gap: "15px",
            height: "100%",
            width: "100%",
            // margin: '30px',
            // border: "1px solid yellow",
          }}
        >
          <BlurCard height="250px" width="70%" title="">
           
          </BlurCard>
          <ProfilePicCard />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            // flexDirection: "column",
            gap: "15px",
            height: "100%",
            width: "100%",
            marginTop: '-100px'
            // margin: '30px',
            // border: "1px solid red",
          }}
        >
            <BlurCard height="300px" width="25%" title="SKILLS">
             
            </BlurCard>
            <BlurCard height="300px" width="44%" title="PROJECTS">
             
            </BlurCard>
          <BlurCard height="200px" width="30%" title="CONTACT">
           
          </BlurCard>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;

