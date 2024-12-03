import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, IconButton, Paper, Button } from '@mui/material';
import Box from '@mui/material/Box';
import cover from '.././images/board.jpg';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

function ConfirmReviewSaved() {
    const navigate = useNavigate();
    const GeneralTypographyStyle = {
        color: 'black',
        textAlign: "center",
        fontFamily: 'Copperplate, Papyrus, fantasy',
        fontWeight: 'bold',
    };

    const myTextFieldStyle = {
        color: 'black',
        flexDirection: 'column',
        lineHeight: 3,
        paddingLeft: '40px'
    };
    const location = useLocation();
    const [reviewSavedState, setSaved] = React.useState(false);

    useEffect(() => {
        if (location.state && location.state.reviewSaved !== undefined) {
            setSaved(location.state.reviewSaved);
          }
        }, [location.state]);

    return (
        <Box
            sx={{
                backgroundImage: `url(${cover})`,
                backgroundRepeat: "non-repeat",
                backgroundSize: "cover",
                backgroundPosition: 'center',
                height: '160vh', // Adjust height as needed
                width: '100vw', // Adjust width as needed
                paddingTop: '13vh',
            }}
        >
            <Box
                sx={{
                    flexGrow: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', 
                }}>
                <Paper
                    elevation={3}
                    sx={{
                        height: '80vh', // Adjust height as needed
                        width: '50vw',
                        marginBottom: 2,
                        position: 'relative',
                        backgroundColor: 'blanchedalmond',
                        display: 'flex',
                        flexDirection: 'column',
                        
                    }}>
                    <div style={{ width: '30px', height: '30px', backgroundColor: 'red', borderRadius: '15px', alignSelf: 'center' }} />
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <Box sx={{
                            flexGrow: 1,
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                        }}>
                            {reviewSavedState? <CheckCircleOutlinedIcon sx={{
                                width: '60px', height: '60px', 
                                fontWeight: 'bold', paddingTop: '10vh'
                            }}></CheckCircleOutlinedIcon>:
                            <HighlightOffRoundedIcon sx={{
                                width: '60px', height: '60px', 
                                fontWeight: 'bold', paddingTop: '2vh'}}></HighlightOffRoundedIcon>}
                            <Typography sx={{
                                fontSize: '30px',
                                fontWeight: 'bold', paddingTop: '10vh'
                            }}
                                style={GeneralTypographyStyle}> {reviewSavedState ? "Review has been saved to Your Notebook" : "Error in saving your review to Notebook"}</Typography> 
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                            display: 'flex', flexDirection: 'row', alignItems: 'self-end',
                        }}>
                            <IconButton
                                variant="contained"
                                sx={{
                                    backgroundColor: 'transparent',  borderRadius: "0px", paddingRight: '3vw',  height: '20vh', paddingInlineStart: '4vw',
                                }}>
                                <Typography sx={{
                                    fontSize: '80%',
                                    fontWeight: 'bold', textTransform: 'none', 
                                }}
                                    style={GeneralTypographyStyle} onClick={() => navigate('/')}>  Go To Home Page</Typography>
                            </IconButton>
                            <IconButton
                                variant="contained"
                                sx={{
                                    backgroundColor: 'transparent', borderRadius: "0px", borderLeft: '2px dashed grey', borderRight: '2px dashed grey', paddingInlineStart: '4vw', paddingInlineEnd: '4vw', height: '20vh'
                                }}>
                                <Typography sx={{
                                    fontSize: '80%',
                                    fontWeight: 'bold', textTransform: 'none'
                                }}
                                    style={GeneralTypographyStyle} onClick={() => navigate('/FillReview/')}> Fill New Review </Typography>
                            </IconButton>
                            <IconButton
                                variant="contained"
                                sx={{
                                    backgroundColor: 'transparent', borderRadius: "0px", paddingLeft: '3vw',  height: '20vh', paddingInlineEnd: '4vw',
                                }}>
                                <Typography sx={{
                                    fontSize: '80%',
                                    fontWeight: 'bold', textTransform: 'none'
                                }}
                                    style={GeneralTypographyStyle} onClick={() => navigate('/ShowNotebook')}> Go To Notebook </Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box >

    )
}
export default ConfirmReviewSaved;