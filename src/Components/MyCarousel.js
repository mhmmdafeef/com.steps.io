import { Button, Paper, Typography } from '@mui/material';
import Image from 'mui-image';
import * as React  from 'react';

import Carousel from 'react-material-ui-carousel';




var items = [
    {
        url: 'banner-img.webp',
        description: "Probably the most random thing you have ever seen!"
    },
    {
        url: "banner-img.webp",
        description: "Hello World!"
    },
    

]

function MyCarousel(){
    return(
        <Carousel>
 {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        
        </Carousel>
    );
        }

function Item(props)
{
    return (
        <Paper>
            <Image src={props.item.url}></Image>
            <Typography>{props.item.description}</Typography>
        </Paper>
    )
}

export default MyCarousel;