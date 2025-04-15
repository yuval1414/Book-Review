import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, IconButton, Paper, Button } from '@mui/material';
import Box from '@mui/material/Box';
import cover from '.././images/computerScreenWithPicZoomIn.jpeg';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import { Start } from '@mui/icons-material';
import LabelledInput from '../component/LabelledInput';
import StarsRating from '../component/StarsRating';
import MultilineTextFields from '../component/MultilineTextFields';
import { alignProperty } from '@mui/material/styles/cssUtils';
import CreateTwoColumns from '../component/CreateTwoColumns';
import BookReview from '../ReviewClass';
import { postData } from '../APIservices/ApiServiceReviews'

const FillReview = () => {
  const navigate = useNavigate();
  const myTypographyStyle = {
    color: 'black',
    flexDirection: 'column',
    lineHeight: 3,
    paddingLeft: '20px',
  };
  const myTextFieldStyle = {
    color: 'black',
    flexDirection: 'column',
    lineHeight: 3,
    paddingLeft: '40px'
  };
  const [newReview, setNewReview] = React.useState(new BookReview());
  const handleFieldsChange = (field, value) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      [field]: value,
    }));
  };
  const handleRatingChange = (newRating) => {
    setNewReview((prevReview) => {
      const updatedReview = { ...prevReview };
      console.log(updatedReview);
      updatedReview.numOfStars = newRating;
      return updatedReview;
    });
  };

  const [reviewSavedState, setIsSaved] = React.useState(false);
  const handleSaveButtonOnClick = async () => {
    try {
      const result = await postData(newReview);
      if (result.status === 201) {
        setIsSaved(true);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
    console.log(reviewSavedState);
  }

  useEffect(() => {
    if (reviewSavedState) {
      navigate('/FillReview/ConfirmReviewSaved',
        { state: { reviewSaved: reviewSavedState } });
    }
  }, [reviewSavedState, navigate]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "non-repeat",
        backgroundSize: "cover",
        backgroundPosition: 'center',
        height: '165vh', // Adjust height as needed
        width: '100vw', // Adjust width as needed
      }}
    >
      <Typography variant="h3" style={{ paddingTop: '12vh', paddingBottom: '4vh', color: 'black', textAlign: "center", fontFamily: 'Copperplate, Papyrus, fantasy', fontWeight: 'bold', }}>
        <IconButton onClick={() => navigate('/')} style={{ color: 'black', padding: '20px', alignItems: 'flex-start', left: 0 }} >
          <ArrowCircleLeftOutlinedIcon sx={{ width: '60px', height: '60px' }}></ArrowCircleLeftOutlinedIcon></IconButton>Add a Review
      </Typography>
      <Box
        sx={{
          flexGrow: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'
        }}>
        <Paper
          sx={{
            height: '80vh',
            width: '45vw',
            marginBottom: 2,
            backgroundColor: '#FFD7E9',
            display: 'flex',
            flexDirection: 'column',
            blockSize: 'fit-content',
          }}>
          <div style={{ width: '30px', height: '30px', backgroundColor: 'red', borderRadius: '15px', alignSelf: 'center' }} />
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            padding: '2vh',
            flexDirection: 'column',
            lineHeight: 4,
          }}>
            <StarsRating value={newReview.numOfStars} onChange={handleRatingChange} />
            <Box sx={{
              flexGrow: 1,
              display: 'flex', flexDirection: 'column'
            }}>
              <CreateTwoColumns category='Book Name:' fieldType='TextField' review={newReview.bookName}
                onChange={(value) => handleFieldsChange('bookName', value)}></CreateTwoColumns>
              <CreateTwoColumns category='Book Number in the Series:' fieldType='TextField' review={newReview.bookNumberInSeries}
                onChange={(value) => handleFieldsChange('bookNumberInSeries', value)}></CreateTwoColumns>
              <CreateTwoColumns category='Author: ' fieldType='TextField' review={newReview.author}
                onChange={(value) => handleFieldsChange('author', value)}></CreateTwoColumns>
              <CreateTwoColumns category='Genre: ' fieldType='TextField' review={newReview.genre}
                onChange={(value) => handleFieldsChange('genre', value)}></CreateTwoColumns>
              <CreateTwoColumns category='Number of Pages: ' fieldType='TextField' review={newReview.numberOfPages}
                onChange={(value) => handleFieldsChange('numberOfPages', value)}></CreateTwoColumns>
              <CreateTwoColumns category='Review:' fieldType='MultilineTextFields' review={newReview.review}
                onChange={(value) => handleFieldsChange('review', value)}></CreateTwoColumns>
            </Box>
          </Box>
          <IconButton
          variant="contained"
          sx={{
            color: 'black', fontSize: '30px', width: '80px', height: '50px', alignSelf: 'center',
            fontFamily: 'Copperplate, Papyrus, fantasy',
            fontWeight: 'bold', backgroundColor: '#ffa1ca', borderRadius: 3,
            '&:hover': {
              backgroundColor: '#36d36a', 
              color: 'inherit',
            }
          }}
          
          onClick={() => handleSaveButtonOnClick()}>Save</IconButton>
        </Paper>
        
      </Box>
    </Box>

  );
};

export default FillReview;