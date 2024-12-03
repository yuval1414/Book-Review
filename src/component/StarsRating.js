import { Rating } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid2';

export default function StarsRating({value, onChange}) {
    return (
        <Grid item xs={8}>
            <Rating
                size= "large"
                name="stars rating"
                value={value}
                onChange={(event, newValue) => {
                    onChange(newValue);
                  }}
            />
        </Grid>
    );
}