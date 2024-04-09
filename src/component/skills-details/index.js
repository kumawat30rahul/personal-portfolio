import MainHeading from "../Common/Texts/components/mainHeading";
import { Divider, Grid,Box } from "@mui/material";

import "./skills.css";
import SkillCard from "./components/skills-card";

const SkillsDetails = ({ skillsArray }) => {
  return (
    <div>
      <MainHeading title={"Skills"} />
      <Divider
        sx={{ margin: "20px 0 20px 0", backgroundColor: "#727171 !important" }}
      />
      <Grid container spacing={1} sx={{padding: '10px'}}>
        {skillsArray.map((skill,index) => (
          <Grid key={index} lg={6} md={6} sm={6} xs={12}>
              <SkillCard
                skillImage={skill.icon}
                skillTitle={skill.skillTitle}
                skillDesc={skill.skillDescription}
                companyName={skill.companyName}
              />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SkillsDetails;
