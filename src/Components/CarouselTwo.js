import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, makeStyles } from '@mui/material';
import '../Styles/HomeStyles.css'
import Image from 'mui-image';
import { ClassNames } from '@emotion/react';
const styles = {
    root: {
       
        minHeight: '300px',
       
        justifyItems:'centre',
        },
      image: {
     
      },
      text: {
       fontSize:'50px',
       fontFamily: 'fantasy',
      },
      subtext: {
        fontSize:'20px',
        fontWeight:'bold',
        
       },
      textOcverlay: {
        position: 'absolute',
        top: '50%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'left',
      

        
        

      },
      textOverlay2: {
        position: 'absolute',
        top: '60%',
        left: '40%',
        transform: 'translate(-200%, -50%)',
        color: 'white',
        textAlign: 'left',
      
        
        

      },
};

const item = 
  {
    text :'Engineered solutions that drive industries forward',
    subtext: 'Specialized in Air Compressors, Heat Exchangers, AODD Pump ,Lobe Pumps, Metering Pump, Specialization in Energy saving',
    imgSrc:'./banner-img-01.jpeg',
  }
  
;

const overlay = {
  flex: 1,
  marginLeft: '50px',
 
};

function CarouselTwo() {
  
  return(
      
        <><Image src={item.imgSrc} alt={item.text} />
        </>
      
  
);
}

export default CarouselTwo               