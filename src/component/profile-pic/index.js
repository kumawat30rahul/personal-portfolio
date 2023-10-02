import React, { useState } from "react";
import "./profile-pic.css";
import { Avatar, Box } from "@mui/material";
import BlurCard from "../blur-card";
import DP from "../../component/assestsTwo/images/profilePic.jpg";
const ProfilePicCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <BlurCard height="350px" width="30%" title="">
      <Box className="profile-pic-div">
        <Box className="profile-pic">
          <Avatar
            src={DP}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            className={`profile-pic-avatar ${isHovered ? 'hovered' : ''}`}
            // sx={{
            //   width: isHovered ? 300 : 250,
            //   height: isHovered ? 300 : 250,
            // }}
          />
        </Box>
        <Box className="my-info">
          <p className="typography-color">kumawat30rahul@gmail.com</p>
          <p className="typography-color">9370534010</p>
        </Box>
      </Box>
    </BlurCard>
  );
};

export default ProfilePicCard;
