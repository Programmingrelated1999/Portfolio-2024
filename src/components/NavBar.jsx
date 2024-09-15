import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <Box sx={{display: "flex"}}>
      <Container>
            <Typography>PORTFOLIO</Typography>
            <Typography>Kaung Htet Myat</Typography>
        </Container>
      <Container>
        <Typography fontWeight={'bold'}>LAST UPDATED 2024</Typography>
      </Container>
      <Container>
        <Typography textAlign={'right'}>FULL STACK SOFTWARE ENGINEER</Typography>
      </Container>
    </Box>
  )
}

export default NavBar
