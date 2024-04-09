import { Box, Divider, Grid, Tooltip } from "@mui/material";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import PersonalInfo from "../component/personal-info/personal-info";
import SkillsDetails from "../component/skills-details";
// import videoSrc from '../../public/assests/videos/vid1.mp4'

const HomePage = () => {
  const [clickedCardId, setClickedCardId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const skillsArray = [
    { 
        icon: ReactIcon, 
        toolTip: "React",
        skillTitle: "React",
        skillDescription: "A JavaScript library for building user interfaces, commonly used for single-page applications.",
        companyName: ["ABC Corp"]
    },
    { 
        icon: JsIcon, 
        toolTip: "Javascript",
        skillTitle: "Javascript",
        skillDescription: "A versatile programming language commonly used for web development.",
        companyName: ["XYZ Inc"]
    },
    { 
        icon: Toolkit, 
        toolTip: "Redux",
        skillTitle: "Redux",
        skillDescription: "A predictable state container for JavaScript apps, commonly used with React for managing application state.",
        companyName: ["ABC Corp"]
    },
    { 
        icon: Axios, 
        toolTip: "Axios",
        skillTitle: "Axios",
        skillDescription: "A promise-based HTTP client for the browser and Node.js, commonly used for making asynchronous HTTP requests.",
        companyName: ["XYZ Inc"]
    },
    { 
        icon: MUI, 
        toolTip: "Material UI",
        skillTitle: "Material UI",
        skillDescription: "A popular React UI framework for building responsive web applications.",
        companyName: ["DEF Ltd"]
    },
    { 
        icon: Next, 
        toolTip: "Next.js",
        skillTitle: "Next.js",
        skillDescription: "A React framework for building server-rendered applications, offering benefits like automatic code splitting and simple page-based routing.",
        companyName: ["ABC Corp"]
    },
    { 
        icon: Node, 
        toolTip: "Node.js",
        skillTitle: "Node.js",
        skillDescription: "A JavaScript runtime built on Chrome's V8 JavaScript engine, commonly used for building scalable network applications.",
        companyName: ["XYZ Inc"]
    },
    { 
        icon: Mongo, 
        toolTip: "MongoDb",
        skillTitle: "MongoDb",
        skillDescription: "A NoSQL database program, commonly used for high-volume data storage in modern web applications.",
        companyName: ["DEF Ltd"]
    },
    { 
        icon: Java, 
        toolTip: "Java",
        skillTitle: "Java",
        skillDescription: "A general-purpose programming language known for its versatility and platform independence.",
        companyName: ["XYZ Inc"]
    },
    { 
        icon: Postman, 
        toolTip: "Postman API",
        skillTitle: "Postman API",
        skillDescription: "A collaboration platform for API development, commonly used for testing, documenting, and sharing APIs.",
        companyName: ["ABC Corp"]
    },
    { 
        icon: Github, 
        toolTip: "Gtihub",
        skillTitle: "Github",
        skillDescription: "A web-based platform for version control and collaboration, commonly used for hosting and reviewing code.",
        companyName: ["XYZ Inc"]
    },
    { 
        icon: Tailwind, 
        toolTip: "Tailwind CSS",
        skillTitle: "Tailwind CSS",
        skillDescription: "A utility-first CSS framework for rapidly building custom designs, commonly used for modern web development.",
        companyName: ["DEF Ltd"]
    }
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
            secondChildren={<PersonalInfo />}
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
            secondChildren={<SkillsDetails skillsArray={skillsArray} />}
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
                  <Tooltip placement="top" title={skill.toolTip}>
                    <img src={skill.icon} className="skill-icon" />
                  </Tooltip>
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
          >
            <Box className="work-swiper-container">
              <Swiper
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="swiper-slider-work">
                  <img
                    src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff"
                    className="swiper-image"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slider-work">
                  <img
                    src="https://www.kdnuggets.com/wp-content/uploads/tree-todd-quackenbush-unsplash.jpg"
                    className="swiper-image"
                  />
                </SwiperSlide>
              </Swiper>
            </Box>
          </BlurCard>
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
                <Tooltip placement="top" title="LinkedIn">
                  <img src={LinkedIn} className="contact-icon" />
                </Tooltip>
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <Tooltip placement="top" title="Github">
                  <img src={Github} className="contact-icon" />
                </Tooltip>
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <Tooltip placement="top" title="X">
                  <img src={Twitter} className="contact-icon" />
                </Tooltip>
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <Tooltip placement="top" title="Instagram">
                  <img src={Instagram} className="contact-icon" />
                </Tooltip>
              </Grid>
              <Grid
                item
                lg={2.4}
                md={2.4}
                sm={2.4}
                xs={2.4}
                className="contact-icon-div"
              >
                <Tooltip placement="top" title="Facebook">
                  <img src={Facebook} className="contact-icon" />
                </Tooltip>
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
