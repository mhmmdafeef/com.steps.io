import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
const textstyle = {
  fontFamily: 'Nunito sans, sans-serif',
  fontWeight: 'bold',
  letterSpacing: '0.1em',
  lineHeight:'1.8',
  fontSize:'16px',
 
};
function ZoomableCard(props) {
  return (
    <Container sx={{ py: 1 }} maxWidth="md">
          <Grid container spacing={4}>
            {props.cards.map((card) => (
              <Grid item key={card} xs={10} sm={1} md={5}>
                <Card 
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardActionArea>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '70%',
                    
                     
                    }}
                   image={card.image}
               
  
                  />
                  </CardActionArea>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
                      {card.heading}
                    </Typography>
                    <Typography style={textstyle} >
                     {card.content}
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  )
}

export default ZoomableCard