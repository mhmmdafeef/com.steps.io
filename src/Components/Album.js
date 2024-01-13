import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from './ResponsiveAppBar';
import BasicTabs from './BasicTabs';
import ImageBanner from './ImageBanner';
import Carousel from 'react-material-ui-carousel';
import MyCarousel from './MyCarousel';
import CarouselTwo from './CarouselTwo';
import { CardActionArea } from '@mui/material';
import ZoomableCard from './ZoomableCard';
import Image from 'mui-image';
import ChoseUs from './ChoseUs';
import Aboutus from './Aboutus';
import AboutUsDescription from './AboutUsDescription';


function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        cteps.in
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [{
  heading: "Air Dryer",
  content:"A system or piece of equipment called an air drier which is used to get rid of moisture from the air.",
  image:"./air-dryer.webp"
},
{
heading:"AODD Pump",
content:"Air-Operated-Double-Diaphragm pump can effectively handle different types of solids along with water",
image:"./com.steps.io/aodd-metalic-pump.webp"
},
{
heading:"Metering Pump",
content:"Get an accurate flow rate of the fluid using a metering pump irrespective of the motor speed",
image:"./com.steps.io/metering-pump.webp"
},{
heading:"Rotary Lobe Pump",
content:"These pumps work on the principle of synchronizing the opposite rotation of two (or more) lobes.",
image:"./com.steps.io/idex-pump.webp"
}
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const styles = {
  hasslefree: {
      paddingLeft:'85px'
      },
    }

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
     
      
     <ResponsiveAppBar/>
     
      
     
     
      <main>
        {/* Hero unit */}

    
        <Box
          sx={{
            bgcolor: 'background.paper',
            
          }}
        >
          <CarouselTwo color="primary"/>
         
          <Container maxWidth="sm" sx={{marginTop:'60px',marginBottom:'60px'}}>
            <Typography variant="h2" align="center" color="black"  fontWeight="700">
            Our Products
            </Typography>
          </Container>
        </Box>
        <ZoomableCard cards={cards}/>
      
          {/* End hero unit */}
          
      </main>
      
      {/* Footer */}
      <ChoseUs/>
      <AboutUsDescription/>
      
    <Box sx={{ bgcolor: '#204183', p: 6 }} component="footer">
          
        <Typography variant="h6" align="center" gutterBottom>
          <Image src='./com.steps.io/logo1.png' style={{width:'250px',height:'36px',marginBottom:'8px'}}/>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
          marginBottom={2}
        >
            M43,Mabnaa Musafah AbuDhabi  |   065381164  |                              info@cteps.in
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}