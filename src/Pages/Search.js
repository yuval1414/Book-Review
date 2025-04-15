import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Button, TextField } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { getReviewsByTitle } from '../APIservices/ApiServiceReviews';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import cover from '.././images/shelf2.jpg';


function SearchReview() {
  const navigate = useNavigate();
  const [bookTitle, setBookTitle] = useState("");
  const handleChangeSearchTitle = (event) => {
    setBookTitle(event.target.value);
  }
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [showSpoilerButtonClicked, setShowSpoilerButtonClicked] = useState(false);
  const handleClickShowSpoiler = () => {
    setShowSpoiler(true);
    setShowSpoilerButtonClicked(true);
  }
  const [reviews, setReviews] = React.useState([]);
  const fetchReviewsByTitle = async () => {
      try {
        const result = await getReviewsByTitle(bookTitle);
        console.log('Fetched reviews:', result);
        setReviews(result.data);
      } catch (error) {
        console.error('Error fetching reviews by title:', error);
      }
    };
  
  const handleClickSearchTitle = () => {
    fetchReviewsByTitle();
    setShowSpoilerButtonClicked(false);
    setShowSpoiler("");
    }
  return (
<Box
      sx={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "non-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        opacity: '65%',
        height: '100vh', // Adjust height as needed
        width: '100vw', // Adjust width as needed
      }}
    >
    <Box >
    <IconButton onClick={() => navigate('/')} style={{ color: 'black', padding: '10px', alignItems: 'center' }} >
    <ArrowCircleLeftOutlinedIcon color={"black"} sx={{ width: '60px', height: '60px' }}></ArrowCircleLeftOutlinedIcon></IconButton>
      <Typography fontSize={'300%'} >
        <center>Search</center>
      </Typography>
      <Box>
        <Box  sx={{
            flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '60px'}}>
      <Button style={{  color: 'black', marginTop: '3px' }} onClick={handleClickSearchTitle}><SearchIcon sx={{ width: '50px', height: '50px' }}></SearchIcon></Button>
      <TextField fullWidth variante="outlined" lable="search book title" style={{ backgroundColor:'white'}} value ={bookTitle} onChange={handleChangeSearchTitle}></TextField>
      
      </Box>

      <Box paddingLeft={'5vw'}>
      <Typography fontSize={'200%'}> Reviews : {bookTitle} </Typography>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-card">
              <Typography fontSize={'100%'}> <strong>Review #{index + 1}</strong></Typography>
              <Typography><strong>username:</strong> {review.username}</Typography>
              <Typography><strong>Rating:</strong> {review.rating}</Typography>
              <Typography><strong>Review:</strong>
              {review.containsSpoilers ? (
               <> { !showSpoilerButtonClicked && <Button onClick={() => handleClickShowSpoiler()}>
                  contains spoilers proceed at your own risk</Button> } </>
              ):( 
                !showSpoiler && <>{review.review}</>
              ) }
              {showSpoiler && <>{review.review}</>}
              </Typography>
               <br />
          

            </div>
          ))
        ) : (
          <Typography >No reviews available.</Typography>
        )}
      </Box>
      </Box>
    </Box>
    
  </Box>

  )
}
export default SearchReview;