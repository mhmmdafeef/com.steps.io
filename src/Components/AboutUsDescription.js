import { Box, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import RectangleIcon from '@mui/icons-material/Rectangle';

function AboutUsDescription() {
  return (
  <Box  style={{backgroundColor:'#f8f8fa'}}>
    
    
    <Grid container spacing={4} marginTop={'32px'}>
      
     <Grid item xs={12} sm={6}>
      
      <Box display="flex" alignItems="center" margin={3} marginBottom={0} >
       
        <Typography color='#204183' variant="h4" component="div" style={{ fontFamily: 'fantasy', marginLeft: 8,borderLeft:'8px' }}>
          ABOUT US
        </Typography>
       
    </Box>
      <Typography fontWeight={600} fontSize={18} margin={3} lineHeight={1.8} fontFamily={ 'Nunito sans, sans-serif'}>
        At CTEPS our mission is to empower industries with advanced technologies and top quality products that drive efficiency,
          productivity and sustainability.We understand the unique challenges faced by different sectors , and we tailor our solutions to meet their specific needs ultimately contributing to their growth and success.
          With years of experience in the industry. <br></br><br></br>CTEPS has developed a profound understanding of the complexities and demands of various industrial processes.Oyr 
          team of dedicated engineers and experts continuously strive to stay at the forefront of tecnological advancements ,ensuring that our clients receive the 
          most innovative and relaible solutions available.
    </Typography>
      
     </Grid>
    
   
    <Grid item xs={12}   sm={3} style={{padding:'50px'}}>
      
      <Card >
        <CardContent >
        <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '70%',
                    
                     
                    }}
                   image="./techexpertise.jpg"
               
  
                  />
        
          <Typography marginTop={5} fontSize={18} fontFamily={ 'Nunito sans, sans-serif'} fontWeight={600}>
            Our team of engineers have a collective experience of more than 20 years in providing tailored solutions
          </Typography>
        </CardContent>
      </Card>
     </Grid>
     <Grid item xs={12} sm={3} style={{padding:'50px'}}>
     
      <Card>
        <CardContent>
        <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '70%',
                    
                     
                    }}
                   image="./technical-support-flat-icon-vector-13931467.jpg"
               
  
                  />
          <Typography marginTop={5} fontSize={18} fontFamily={ 'Nunito sans, sans-serif'} fontWeight={600}>
           Our commitment to quality,reliability and delivery earned us trust of numerous business across industries
          </Typography>
        </CardContent>
        
      </Card>
     </Grid>
    </Grid>  
  </Box>
      );

  
}

export default AboutUsDescription