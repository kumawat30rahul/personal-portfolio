import { Box, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import "./home-page.css";
import BlurCard from "../component/blur-card";
import DP from "../component/assestsTwo/images/profilePic.jpg";
import ReactIcon from "../component/assestsTwo/images/skills/react.png";
import JsIcon from "../component/assestsTwo/images/skills/JavaScript-logo.png";
import Toolkit from "../component/assestsTwo/images/skills/redux.webp";
import Axios from "../component/assestsTwo/images/skills/axios.png";
import MUI from "../component/assestsTwo/images/skills/mui.png";
import Next from "../component/assestsTwo/images/skills/next-js.svg";
import Node from "../component/assestsTwo/images/skills/node.png";
import Mongo from "../component/assestsTwo/images/skills/mongo.png";
import Java from "../component/assestsTwo/images/skills/Java-logo.png";
import Postman from "../component/assestsTwo/images/skills/post.webp";
import Github from "../component/assestsTwo/images/skills/github.png";
import Tailwind from "../component/assestsTwo/images/skills/tailwind.png";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Instagram from "../component/assestsTwo/images/contact/instagram.png";
import Facebook from "../component/assestsTwo/images/contact/facebook.png";
// import LinkedIn from '../component/assestsTwo/images/contact/linkedin.webp'
import LinkedIn from "../component/assestsTwo/images/contact/linkedin.png";
import Twitter from "../component/assestsTwo/images/contact/twiter.png";

// import videoSrc from '../../public/assests/videos/vid1.mp4'

const HomePage = () => {
  const [clickedCardId, setClickedCardId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const skillsArray = [
    { icon: ReactIcon },
    { icon: JsIcon },
    { icon: Toolkit },
    { icon: Axios },
    { icon: MUI },
    { icon: Next },
    { icon: Node },
    { icon: Mongo },
    { icon: Java },
    { icon: Postman },
    { icon: Github },
    { icon: Tailwind },
  ];
  return (
    <div className="home-parent-div">
      <div className="bg-filter-container"></div>
      <div className="bg-cherry-gf"></div>
      <Grid container spacing={2}>
        <Grid
          item
          lg={8}
          md={8}
          sm={8}
          xs={8}
          sx={{ height: "150px !important" }}
        >
          <BlurCard
            height="150px"
            width="100%"
            title=""
            setClickedCardId={setClickedCardId}
            clickedCardId={clickedCardId}
            blurCardId={7}
          >
            <Box className="name-div">
              <p className="greeting">Hii || खम्मा घणी || नमस्ते </p>
              <p className="my-name">I am Rahul Kumawat</p>
              <p className="description">
                Combining full-stack expertise with a frontend finesse, I'm
                driven by a passion for pixel perfection and fueled by a love
                for sports
              </p>
            </Box>
          </BlurCard>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4} sx={{ height: "370px" }}>
          <BlurCard
            height="350px"
            width="100%"
            title=""
            blurCardId={3}
            setClickedCardId={setClickedCardId}
            clickedCardId={clickedCardId}
          >
            <Box className="profile-pic-div">
              <Box className="profile-pic">
                <img
                  src={DP}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`profile-pic-avatar ${isHovered ? "hovered" : ""}`}
                  alt="Profile Pic of Rahul Kumawat"
                />
              </Box>
              {/* <Box className="my-info">
                <p className="typography-color">kumawat30rahul@gmail.com</p>
                <p className="typography-color">9370534010</p>
              </Box> */}
            </Box>
          </BlurCard>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          sm={3}
          xs={3}
          sx={{ marginTop: "-200px !important" }}
        >
          <BlurCard
            height="400px"
            width="100%"
            title="Skills"
            blurCardId={1}
            setClickedCardId={setClickedCardId}
            clickedCardId={clickedCardId}
          >
            <Grid container className="skills-main-wrapper">
              {skillsArray.map((skill) => (
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={4}
                  xs={4}
                  className="grid-item-skills"
                >
                  <img src={skill.icon} className="skill-icon" />
                </Grid>
              ))}
            </Grid>
          </BlurCard>
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          sm={5}
          xs={5}
          sx={{ marginTop: "-200px !important" }}
        >
          <BlurCard
            height="400px"
            width="100%"
            title="Work"
            blurCardId={2}
            setClickedCardId={setClickedCardId}
            clickedCardId={clickedCardId}
          ></BlurCard>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <BlurCard
            height="200px"
            width="100%"
            title="Contact"
            setClickedCardId={setClickedCardId}
            clickedCardId={clickedCardId}
          >
            <Box mb={2}>
              <Box className="contact-main-info">
                <EmailIcon fontSize="small" />
                <p>kumawat30rahul@gmail.com</p>
              </Box>
              <Box className="contact-main-info">
                <LocalPhoneIcon fontSize="small" />
                <p>+919370534010</p>
              </Box>
              <Box className="contact-main-info">
                <LocationOnIcon fontSize="small" />
                <p>Brookfield, Banglore</p>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "#727171 !important" }} />
            <Grid
              container
              sx={{
                marginTop: "10px",
              }}
            >
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <img src={LinkedIn} className="contact-icon" />
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <img src={Github} className="contact-icon" />
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <img src={Twitter} className="contact-icon" />
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <img src={Instagram} className="contact-icon" />
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <img src={Facebook} className="contact-icon" />
              </Grid>
            </Grid>
          </BlurCard>
        </Grid>
      </Grid>
      {/* </Box> */}
    </div>
  );
};

export default HomePage;
