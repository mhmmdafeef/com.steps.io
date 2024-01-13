import { Box, Grid, Paper, Typography, Container} from '@mui/material'
import Image from 'mui-image'
import React from 'react'


const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor:'#204183',
  };
  
  const textContainerStyle = {
    flex: 1,
    marginLeft: '50px',
   
  };
  
  const imageStyle = {
    maxWidth: '100%',
    width:'700px',

// Optional: Add rounded corners to the image
  };

function ChoseUs() {
    return (

        <Grid container backgroundColor={'#204183'} spacing={2} marginTop={'20px'}> 
           <Grid item xs={12} sm={6}>
           <Typography color="white" fontWeight={600} fontSize={18} marginLeft={3} lineHeight={1.8} fontFamily={ 'Nunito sans, sans-serif'}>
           For all of your pumping needs, go no further than CTEPS Engineers Pvt. Ltd. More than 250 national clients have trusted us with their business. Our products are designed and manufactured by professional engineers. A market leader in terms of quality, functionality, and lifespan, our products stand out from the rest. After-sale services from our technical experts are our strength.
Our product range has various options to choose from as per the industry requirements and the latest innovations in the market. Our solid market presence over the past 30 years makes us a trusted industrial solution provider. Choose our company for a smooth and hassle-free pumping operation at reasonable prices.
    </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Image src='./banner-img.webp'></Image>
        </Grid>
        </Grid>
     
        );
}




export default ChoseUs