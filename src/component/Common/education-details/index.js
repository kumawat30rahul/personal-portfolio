import { Box } from "@mui/material";
import BulletPoints from "../Bulletpoints";
import StyledSubHeading from "../Texts/components/subHeading";
import './education-details.css'

const EducationDetails = ({
  educationImage,
  educationBulletPoints,
  educationDesc,
  educationTitle,
}) => {
  return (
    <Box className="education-detail-container">
      <StyledSubHeading title={educationTitle} />
      <p className="edu-desc">{educationDesc}</p>
      <div className="education-flex">
        <BulletPoints bulletArray={educationBulletPoints} />
        {/* <Box className="education-image-div">
          <img src={educationImage} className="education-image" />
        </Box> */}
      </div>
    </Box>
  );
};

export default EducationDetails;
