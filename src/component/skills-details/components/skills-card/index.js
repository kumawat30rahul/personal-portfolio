import { Chip,Box } from "@mui/material";
import "./skills-card.css";

const SkillCard = ({ skillImage, skillTitle, skillDesc, companyName }) => {
  return (
    <Box className="skill-card-container">
      <div className="skill-card-image-container">
        <img src={skillImage} alt="skill image" className="skill-card-image" />
      </div>
      <div className="skill-card-info-container">
        <div className="title-skillCompany-container">
          <p className="skill-card-title">{skillTitle}</p>
          <div className="company-container">
            {companyName.map((company) => (
              <Chip label={company} />
            ))}
          </div>
        </div>
        <p className="skill-card-desc">{skillDesc}</p>
      </div>
    </Box>
  );
};

export default SkillCard;
