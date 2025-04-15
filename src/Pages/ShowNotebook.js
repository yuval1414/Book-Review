import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Paper, IconButton } from '@mui/material';
import cover from '.././images/aboveDesk.jpg';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Rating from '@mui/material/Rating';
import { BookRounded, PaddingOutlined } from '@mui/icons-material';
import StarsRating from '.././component/StarsRating';
import { getReviewsAndBooksByUsername } from '../APIservices/ApiServiceReviews'

function ShowNotebook() {
  const myTypographyStyle = {
    color: 'black',
    flexDirection: 'column',
    lineHeight: 3,
    fontFamily: 'Copperplate, Papyrus, fantasy',
    // fontWeight: 'bold',
    fontSize: '21px',
    whiteSpace: 'nowrap',

  };
  const myReviewStyle = {
    color: 'black',
    lineHeight: 3,
    fontFamily: 'Copperplate, Papyrus, fantasy',
    // fontWeight: 'bold',
    fontSize: '21px',
    display: 'inline',
    whiteSpace: 'normal',

  };

  const navigate = useNavigate();
  const [booksReviewsArr, setReviews] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currReview, setCurrReview] = React.useState({ book: {}, review: {} });

  const handleNextPage = () => {
    const newPage = (currentPage + 1) % booksReviewsArr.length;
    setCurrentPage(newPage);
    handleCurrentReview(newPage);
  };
  const handlePrevPage = () => {
    let newPage = 0;
    if (currentPage - 1 < 0) {
      newPage = booksReviewsArr.length - 1;
    }
    else {
      newPage = (currentPage - 1) % booksReviewsArr.length;
    }
    setCurrentPage(newPage);
    handleCurrentReview(newPage);
  };

  const handleCurrentReview = useCallback((currPage) => {
    if (booksReviewsArr && booksReviewsArr.length > 0 && booksReviewsArr[currPage]) {
      setCurrReview(booksReviewsArr[currPage]);
    } else {
      console.log("No review available for the current page");
    }
  }, [booksReviewsArr]);

  useEffect(() => {
    if (booksReviewsArr.length > 0) {
      handleCurrentReview(currentPage);
    }
  }, [booksReviewsArr, currentPage, handleCurrentReview]);

  useEffect(() => {
    const fetchReviewsAndBooksByUsername = async () => {
      try {
        const result = await getReviewsAndBooksByUsername("yuval1");
        console.log('Fetched reviews:', result);
        setReviews(result.data);
        console.log(result.data);
      } catch (error) {
        console.error('Error fetching user reviews:', error);
      }
    };

    fetchReviewsAndBooksByUsername();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        height: '120vh',
        width: '100vw',
      }}
    >
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        padding: '40px',
        flexDirection: 'row',
      }}>
        <IconButton onClick={() => navigate('/')} sx={{ color: 'black', width: '60px', height: '60px', padding: '20px' }}>
          <ArrowCircleLeftOutlinedIcon sx={{ width: '60px', height: '60px', padding: '20px' }} />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '60px'
          }}>
          <ArrowBackIosIcon fontSize="large" onClick={handlePrevPage} />
          <Paper
            elevation={3}
            sx={{
              height: '100vh',
              width: '50vw',
              position: 'relative',
              overflow: 'scroll',
              overflowX: 'hidden',
            }}>
            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              padding: '40px',
              flexDirection: 'column',
              lineHeight: 5,
            }}
            key = {currReview.review.rating}>
              {/* user rating */}
              <Rating name="half-rating-read" size="large" precision={0.5} value={currReview.review.rating} readOnly />
            </Box>
            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'flex-start',
              padding: '0 40px 0 40px',
              flexDirection: 'column',
              lineHeight: 5,
            }}>

              <Box sx={{
                paddingTop: '10px', flexGrow: 1,
                display: 'flex', flexDirection: 'row',
              }}>
                <Box sx={{ alignItems: 'flex-start', paddingLeft: '10vh' }}>
                  <Typography sx={myTypographyStyle}>
                    Book Name:  <span style={{ paddingLeft: '14vh' }}></span>
                    {currReview.book.title} </Typography>
                  <Typography sx={myTypographyStyle}>
                    Book Number: <span style={{ paddingLeft: '12vh' }}>
                      {currReview.book.numberInSeries}</span> </Typography>
                  <Typography sx={myTypographyStyle}>
                    Author:  <span style={{ paddingLeft: '19vh' }}>
                      {currReview.book.author} </span></Typography>
                  <Typography sx={myTypographyStyle}>
                    Genre:  <span style={{ paddingLeft: '20vh' }}>
                      {currReview.book.genre} </span></Typography>
                  <Typography sx={myTypographyStyle}>
                    Pages:  <span style={{ paddingLeft: '21vh' }}>
                      {currReview.book.pagesNumber} </span></Typography>
                  <Typography sx={myTypographyStyle}>
                    <Typography component="span" sx={myTypographyStyle} style={{ display: 'inline' }}>
                      Review:</Typography>  <Typography component="span" sx={myReviewStyle} style={{
                        paddingLeft: '20vh', maxWidth: '350px', textOverflow: 'ellipsis',
                        wordWrap: 'break-word',
                      }} >
                      {currReview.review.review}</Typography>  </Typography>

                </Box>
              </Box>
            </Box>
          </Paper>
          <ArrowForwardIosIcon fontSize="large" onClick={handleNextPage} />
        </Box>
      </Box >
    </Box>
  )
}
export default ShowNotebook;