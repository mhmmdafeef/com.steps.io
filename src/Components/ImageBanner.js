import React from 'react';
import { Paper, Typography } from '@mui/material';
import backgroundImage from './R.png';

const ImageBanner = () => {
  return (
    <Paper
      elevation={3}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '400px', // Adjust the height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4">CSTEPS: One stop solution for all industrial pumps solution</Typography>
    </Paper>
  );
};

export default ImageBanner;