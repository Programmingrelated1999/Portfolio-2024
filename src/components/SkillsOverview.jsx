import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import "./SkillsOverview.css";

// icons import
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StorageIcon from '@mui/icons-material/Storage';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BugReportIcon from '@mui/icons-material/BugReport';

const SkillsOverview = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{fontSize: "1.5em", marginBottom: "1em"}}>My Skills & Experiences</Typography>
      <Card className="skills-card" padding={1} sx={{boxShadow: "30px -16px teal"}}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h6" sx={{ fontSize: "0.95em", display: 'flex', alignItems: 'center' }}>
            REST API <CompareArrowsIcon sx={{ ml: 1 }} />
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "0.95em", display: 'flex', alignItems: 'center' }}>
            SOFTWARE DEVELOPMENT <WysiwygIcon sx={{ ml: 1 }} />
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "0.95em", display: 'flex', alignItems: 'center' }}>
            E-COMMERCE <AddBusinessIcon sx={{ ml: 1 }} />
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "0.95em", display: 'flex', alignItems: 'center' }}>
            DATABASES <StorageIcon sx={{ ml: 1 }} />
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "0.9em", display: 'flex', alignItems: 'center' }}>
            SOFTWARE DOCUMENTATION <PostAddIcon sx={{ ml: 1 }} />
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "0.95em", display: 'flex', alignItems: 'center' }}>
            TESTING <BugReportIcon sx={{ ml: 1 }} />
          </Typography>
        </CardContent>  
      </Card>
    </Container>
  );
}

export default SkillsOverview;
