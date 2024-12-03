import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Button } from '@mui/material';
//import Home from './Home';



function SearchReview() {
  const navigate = useNavigate();
  const [showMassage, setShowMassage] = useState(false);
  const handleClickButton =  () => {
    setShowMassage(true);
    
  }


  return (

    <div style={{ padding: '10px', marginTop: '70px' }}>
      <Typography fontSize={'110%'}>
        <center>Search a Review</center>
      </Typography>
      <IconButton onClick={() => navigate('/')}> go back to home page</IconButton>
        <h2>Users</h2>
        {!showMassage && (<Button style={{ color: 'black', marginTop: '3px' }} onClick={handleClickButton}>get message</Button>)}
        {showMassage}
      
    </div>

  )
}
export default SearchReview;