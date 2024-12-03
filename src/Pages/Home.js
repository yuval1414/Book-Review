import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Button, Container, colors, ButtonGroup, Stack } from '@mui/material';
import { Menu, MenuItem, Toolbar } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import cover from '.././images/coverbooks.jpg';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';

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
  };
  return (
    //style={{ padding: '10px', marginTop: '70px', backgroundColor: colors.grey}}
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
      <AppBar position="static" style={{ backgroundColor: "transparent", alignItems: 'center' , padding:'5px'}}>
        <Toolbar variant="dense">
          <Typography fontSize= '30px' color="inherit" component="div" alignItems={'center'} style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}>
            Book Review Notebook
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack direction={'column'} alignItems={'self-start'} spacing={5} padding={'130px'} >
        <Button style={{ color: 'white' }} onClick={() => navigate('/FillReview')}>
          <AddCircleOutlineIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></AddCircleOutlineIcon>
          <Typography sx={{ fontSize: '30px', paddingLeft: '25px' }} style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}>add a review</Typography></Button>
        <Button style={{ color: 'white', marginTop: '3px' }} onClick={() => navigate('/SearchReview')}>
          <SearchIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></SearchIcon>
          <Typography sx={{ fontSize: '30px', paddingLeft: '25px' }} style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}>search a review</Typography></Button>
        <Button style={{ color: 'white', marginTop: '3px' }} onClick={() => navigate('/ShowNotebook')}>
          <MenuBookIcon style={{ padding: '10px' }} sx={{ width: '40px', height: '40px' }}></MenuBookIcon>
          <Typography sx={{ fontSize: '30px', paddingLeft: '25px' }} style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}>show notebook </Typography></Button>
      </Stack >
    </Box>

  )
}
export default Home;