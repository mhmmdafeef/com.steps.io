import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { blue, pink, red } from '@mui/material/colors';
import Image from 'mui-image';

const pages = ['Home','About Us','Products','Contact Us'];


const styles = {
  root: {
      justifyContent:'center',
      display:'flex',
      


      },
      image:{
        alignSelf: 'flex-end',  
        width: '250px',
        height: '64px',
        paddingBottom: '20px',
     
      
      }

};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  const theme = createTheme({
    palette: {
        primary: {
          main: '#204183',
        },
        secondary: pink,
      },
    },
    
  );
 
 

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color="primary"  >
   
      <Container maxWidth="xl">
      
        <Toolbar disableGutters style={styles.root}>
        <img src='./logo1.png' style={styles.image} />
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',justifyContent:'center',alignItems:'flex-end' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              position="relative"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                float: "right",
               
            
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} position="left" color='primary'>
                  <Typography textAlign="left" color="inherit">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',alignItems:'center', justifyContent:'flex-end',paddingRight:'100px' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block',fontWeight:'bold',fontSize:'20px' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;