import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Button, Container, colors, ButtonGroup, Stack } from '@mui/material';
import { Menu, MenuItem, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import cover from '.././images/MainBackgroundWhite.jpg';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { fontGrid } from '@mui/material/styles/cssUtils';

// const useStyles = makeStyles(() => ({
//     Button: {
//         justifyContent: 'flex-end',
//         position: 'absolute !important',
//         width: '100%',
//         padding: '0 !important',
//         color: purple,

//     },
// }));

function Home() {
  const navigate = useNavigate();
  const TypographyBigButtonStyle = {
    color: 'white',
    marginTop: '3px',
    fontFamily: 'Copperplate, Papyrus, fantasy',
    fontWeight: 'bold',
    fontSize: '21px',
    '&:hover': {
      font: '#b12f2f',
    }
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        height: '100vh', // Adjust height as needed
        width: '100vw', // Adjust width as needed
      }}
    >
      <AppBar position="static" style={{ backgroundColor: "transparent", padding: '5px' }}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button style={{ color: 'black', marginTop: '3px' }} onClick={() => navigate('/SearchReview')}>
        <SearchIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></SearchIcon>
        </Button>
        <Typography fontSize='30px' color="black" component="div" style={{ padding: '10px', fontFamily: 'Copperplate, Papyrus, fantasy' }}>
           <b>Book Review Notebook</b>
        </Typography>
        {/* change to signin or create new user */}
        <Button style={{ color: 'black', marginTop: '3px' }} onClick={() => navigate('/ShowNotebook')}>  
        <AccountCircleIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></AccountCircleIcon>
        </Button>
        </Toolbar>
      </AppBar>
      
      <Stack direction={'column'} alignItems={'center'} spacing={5} padding={'100px'} >
      <Typography alignItems={'center'} style={{   fontSize: '50px' ,fontFamily: 'Copperplate, Papyrus, fantasy' }}>
        Welcome <br></br>

      
      </Typography>
        <Button style={{ color: 'black' }} onClick={() => navigate('/FillReview')}>
          <AddCircleOutlineIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></AddCircleOutlineIcon>
            <Typography sx={{ fontSize: '30px', paddingLeft: '25px' ,  '&:hover': {
      color: '#b12f2f',  fontWeight: 'bold',
    }}} style={{
            fontFamily: 'Copperplate, Papyrus, fantasy'}}><b>add a review</b></Typography></Button>
        {/* <Button style={{ color: 'black', marginTop: '3px' }} onClick={() => navigate('/SearchReview')}> */}
          {/* <SearchIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></SearchIcon>
          <Typography sx={{ fontSize: '30px', paddingLeft: '25px' , '&:hover': {
      color: '#b12f2f',  fontWeight: 'bold',
    }}} style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}><b>search</b></Typography></Button>
        <Button style={{ color: 'black', marginTop: '3px' }} onClick={() => navigate('/ShowNotebook')}>
          <MenuBookIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></MenuBookIcon>
          <Typography sx={{ fontSize: '30px', paddingLeft: '25px', '&:hover': {
      color: '#b12f2f',  fontWeight: 'bold',
    } }} style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}><b>show notebook</b> </Typography></Button> */}
      </Stack >
    </Box>

  )
}
export default Home;