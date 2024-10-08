import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { createTheme } from '@mui/material/styles';

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

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx = {{display: "flex", justifyContent: "space-between"}}>
        <Box p = {2} >
            <Typography variant='h4'>MYAT</Typography>
        </Box>
        <Box p = {2} sx = {{display: "flex"}}>
          <Typography variant='h4' px = {3}>HOME</Typography>
          <Typography variant='h4' px = {3}>ABOUT ME</Typography>
          <Typography variant='h4' px = {3}>PROJECTS</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default NavBar
