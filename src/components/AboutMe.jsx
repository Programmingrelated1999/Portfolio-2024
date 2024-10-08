import Container from '@mui/material/Container'
import './AboutMe.css'
import { createTheme, ThemeProvider, Typography } from '@mui/material';

// Create a custom theme with the Kalam font
const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'Kalam, cursive',
      fontWeight: 400, // Bold
    },
    h4: {
      fontFamily: 'Kalam, cursive',
      fontWeight: 400, // Regular
    },
    h2: {
      fontFamily: 'Kalam, cursive',
      fontWeight: 800, // Regular
    }
  },
});

const AboutMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container m={3} sx = {{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center"}}>
        <Typography py = {1} variant = "h2" sx={{color: "#ff6b6b"}}>Hello.</Typography> 
        <Typography py = {1} variant = "h4" sx = {{maxWidth: "70% "}}>I'm Kaung Htet Myat, a <span className='purple-text'>Software Engineer</span> based in North Carolina, currently working for an e-commerce company.</Typography>
        <Typography className = "intro-text-color" p = {1} variant = "h6" sx = {{maxWidth: "70% "}}>
        I have been coding for over 6 years and have worked as a software engineer for the past 2 years. I graduated from the&nbsp;  
          <a className="aboutme-link" href="https://www.uccs.edu/" target="_blank">University of Colorado Colorado Springs</a> 
          &nbsp;with a degree in Computer Science. I am passionate about turning ideas into reality through code and am always curious to learn new tools and innovate. You can find my work on my&nbsp;<a className="aboutme-link" href="https://github.com/Programmingrelated1999" target="_blank">GitHub</a>.
        <br/>
          <span className = 'hobby-text'>
            <p>Outside of programming, I enjoy trying new hobbies, such as learning tennis, watching soccer, and traveling.</p>
            <span className = "hobby-arrow"></span>
          </span>
      </Typography>
      </Container>
    </ThemeProvider>
  )
}

export default AboutMe
