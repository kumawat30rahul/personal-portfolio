import { Box, Divider, Grid } from "@mui/material";
import "./personal-info.css";
import StyledHeading from "../Common/Texts/components/heading";
import StyledSubHeading from "../Common/Texts/components/subHeading";
import BulletPoints from "../Common/Bulletpoints";
import AccioJob from "../assestsTwo/images/education/acciojob.png";
import EducationDetails from "../Common/education-details";
import Diploma from "../assestsTwo/images/education/diploma.png";
import SchoolImage from "../assestsTwo/images/education/sdila.png";

const PersonalInfo = () => {
  const accioJobPoints = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  return (
    <div>
      <Box className="name-div-personalinfo">
        <p className="greeting" style={{ textAlign: "center" }}>
          Hii || खम्मा घणी || नमस्ते{" "}
        </p>
        <p className="my-name" style={{ textAlign: "center" }}>
          I am Rahul Kumawat
        </p>
        <p className="description" style={{ textAlign: "center" }}>
          Combining full-stack expertise with a frontend finesse, I'm driven by
          a passion for pixel perfection and fueled by a love for sports
        </p>
      </Box>
      <Divider
        sx={{ margin: "20px 0 20px 0", backgroundColor: "#727171 !important" }}
      />
      <div className="education-info-div">
        <StyledHeading title={"About Me"} />
        <div className="about-me-section">
          <p style={{ width: "60%", textAlign: "start" }}>
            Hey there! I'm a caffeine-fueled dreamer with a penchant for
            storytelling and a love for all things adventurous. You'll often
            find me lost in a good book, exploring new hiking trails, or
            experimenting in the kitchen with exotic recipes. I'm a firm
            believer in the power of kindness, creativity, and a well-timed pun.
            Let's embark on this wild journey called life together! 🚀
          </p>
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling.jpg"
            alt="spmetjojm"
            className="personal-info-image"
          />
        </div>
        <StyledHeading title={"Motivation"} />
        <div className="about-me-section">
          <p style={{ width: "60%", textAlign: "start" }}>
            Hey there! I'm a caffeine-fueled dreamer with a penchant for
            storytelling and a love for all things adventurous. You'll often
            find me lost in a good book, exploring new hiking trails, or
            experimenting in the kitchen with exotic recipes. I'm a firm
            believer in the power of kindness, creativity, and a well-timed pun.
            Let's embark on this wild journey called life together! 🚀
          </p>
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling.jpg"
            alt="spmetjojm"
            className="personal-info-image"
          />
        </div>
        <StyledHeading title={"Passion and Hobbies"} />
        <div className="about-me-section">
          <p style={{ width: "60%", textAlign: "start" }}>
            Hey there! I'm a caffeine-fueled dreamer with a penchant for
            storytelling and a love for all things adventurous. You'll often
            find me lost in a good book, exploring new hiking trails, or
            experimenting in the kitchen with exotic recipes. I'm a firm
            believer in the power of kindness, creativity, and a well-timed pun.
            Let's embark on this wild journey called life together! 🚀
          </p>
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/solo-leveling.jpg"
            alt="spmetjojm"
            className="personal-info-image"
          />
        </div>
        <StyledHeading title={"Education"} />
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} sx={12}>
            <EducationDetails
              educationTitle={"ACCIO JOB (Software Development)"}
              educationImage={AccioJob}
              educationBulletPoints={accioJobPoints}
              educationDesc={
                "ahsdf ajsnfjasejf jkasebd fjabsdjfb ajsf jab dsfjab sjdfbasjhdbf kjahsbd fjab sjdbkfajshbd fhaskfjalsjbf kjandkfjba jhf jkabsdfjajsdbf"
              }
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} sx={12}>
            <EducationDetails
              educationTitle={"Bachelor of Technology (Mechanical)"}
              educationImage={
                "https://upload.wikimedia.org/wikipedia/en/6/64/BATU_logo.png"
              }
              educationBulletPoints={accioJobPoints}
              educationDesc={
                "ahsdf ajsnfjasejf jkasebd fjabsdjfb ajsf jab dsfjab sjdfbasjhdbf kjahsbd fjab sjdbkfajshbd fhaskfjalsjbf kjandkfjba jhf jkabsdfjajsdbf"
              }
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} sx={12}>
            <EducationDetails
              educationTitle={"Diploma in Mechanical Engineering"}
              educationImage={Diploma}
              educationBulletPoints={accioJobPoints}
              educationDesc={
                "ahsdf ajsnfjasejf jkasebd fjabsdjfb ajsf jab dsfjab sjdfbasjhdbf kjahsbd fjab sjdbkfajshbd fhaskfjalsjbf kjandkfjba jhf jkabsdfjajsdbf"
              }
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} sx={12}>
            <EducationDetails
              educationTitle={"10th (S.S.C)"}
              educationImage={SchoolImage}
              educationBulletPoints={accioJobPoints}
              educationDesc={
                "ahsdf ajsnfjasejf jkasebd fjabsdjfb ajsf jab dsfjab sjdfbasjhdbf kjahsbd fjab sjdbkfajshbd fhaskfjalsjbf kjandkfjba jhf jkabsdfjajsdbf"
              }
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PersonalInfo;
