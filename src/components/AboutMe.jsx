import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import SkillsOverview from './SkillsOverview'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <Container sx = {{marginTop: "4em"}}>
        {/* <Typography variant = "h2" sx={{marginLeft: "0.5em", color: "#ff6b6b"}}>Hello. </Typography> */}
        <Typography variant = "h3" sx={{color: "#ff6b6b"}} mx = {5}>Hello.</Typography> 
        <Container sx = {{display: "flex", flexDirection: {xs: "column", md: "row"}, paddingTop: 1}}>
          <Typography variant = "h5" sx={{maxWidth: {xs: "100%", md: "60%"}}} mx = {2}>My name is Kaung Htet Myat. I am a Software Engineer based in North Carolina, 
            currently working for an e-commerce company. <br/>
            
            It has been 2 years since I started my career in software engineering but over 6 years since I started coding. I graduated from&nbsp;
            <a className='aboutme-link' href='https://www.uccs.edu/' target='blank'>University of Colorado Colorado Springs</a> with a degree in Computer Science. I am passionate about 
            writing codes to turn ideas into reality. I am organized, creative and an ambitious person who is always curious to learn new tools and innovate. 
            You can find most of my work on my <a className='aboutme-link' href='https://github.com/Programmingrelated1999' target='blank'>Github</a> Page.

            <br/><br/>
            Outside of programming, I like to try new hobbies. I am currently learning to play tennis, watching soccer games, and travelling.  
          </Typography>
          <Container>
            <SkillsOverview />
          </Container>
        </Container>
    </Container>
  )
}

export default AboutMe
