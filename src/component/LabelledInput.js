import { Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';

export default function LabelledInput({ category, review }) {
    const [value, saveValue] = React.useState();
    return (
        <Grid item xs={8}>
            <Typography style={{ color: 'black', textAlign: "center" }}>
                {category}:    <TextField variant="standard"
                    value={value}
                    onChange={(event, newValue) => {
                        saveValue(newValue);
                        review.category = newValue; 
                    }} />
            </Typography>
        </Grid>
    );
}