import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Button } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { getReviewsByTitle } from '.././APIservices/ApiService';
import Box from '@mui/material/Box';


function SearchReview() {
  const navigate = useNavigate();
  const [showMassage, setShowMassage] = useState(false);
  const handleClickButton = () => {
    setShowMassage(true);
  }

  const [reviews, setReviews] = React.useState([]);
  useEffect(() => {
    const fetchReviewsByTitle = async () => {
      try {
        const result = await getReviewsByTitle("A Court of Mist and Fury ");
        console.log('Fetched reviews:', result);
        setReviews(result.data);
      } catch (error) {
        console.error('Error fetching reviews by title:', error);
      }
    };

    fetchReviewsByTitle();
  }, []);

  return (

    <div style={{ padding: '10px', marginTop: '70px' }}>
      <Typography fontSize={'110%'}>
        <center>Search a Review</center>
      </Typography>
      <IconButton onClick={() => navigate('/')} style={{ color: 'black', padding: '10px', alignItems: 'flex-start', left: 0 }} >
        <ArrowCircleLeftOutlinedIcon sx={{ width: '60px', height: '60px' }}></ArrowCircleLeftOutlinedIcon></IconButton>

      <h2>Users</h2>
      {!showMassage && (<Button style={{ color: 'black', marginTop: '3px' }} onClick={handleClickButton}>get message</Button>)}
      {showMassage}

      <div>
        <h2>Reviews to book: Throne of Glass </h2>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>Review #{index + 1}</h3>
              <p><strong>username:</strong> {review.username}</p>
              <p><strong>Rating:</strong> {review.rating}</p>
              <p><strong>Review:</strong>
              {!review.containsSpoilers && (
              <>{review.comment}</>
              )}</p>
               <br />
              {/* {review.isPartOfSeries && (
                <>
                  <p><strong> Series Name:</strong> {review.seriesName}</p>
                  <p><strong> Number in the series:</strong> {review.numberInSeries}</p>
                </>
              )} */}
              

            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>


  )
}
export default SearchReview;