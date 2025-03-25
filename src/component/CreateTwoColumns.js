import React from 'react';
import TextField from '@mui/material/TextField';
import { Typography, Box } from '@mui/material';
import MultilineTextFields from '../component/MultilineTextFields';
import SelectBookTitles from './SelectBookTitles';

export default function CreateTwoColumns({ category, fieldType, review, onChange }) {
    const myStyle = {
        color: 'black',
        flexDirection: 'row',
        lineHeight: 3,
        paddingLeft: '20px',
        fontFamily: 'Copperplate, Papyrus, fantasy',
        // fontWeight: 'bold',
        fontSize: '21px',
    };
    const textFieldStyle = {
        color: 'black',
        fontFamily: 'Copperplate, Papyrus, fantasy',
        fontSize: '21px',
        
    };

    return (
        <Box sx={{
            paddingTop: '10px', flexGrow: 1,
            display: 'flex', flexDirection: 'row'}}>
            <Box sx={{ alignItems: 'flex-start'}}>
                <Typography sx={myStyle}>
                    {category}
                </Typography>
            </Box>
            <Box sx={{ alignItems: 'flex-start', paddingLeft: '30px' }}>
                {fieldType === 'TextField' ? (
                    <TextField sx={myStyle}
                    variant="standard" 
                    value={review} 
                    onChange={(e) => onChange(e.target.value)}
                    />
                ): fieldType === 'SelectBookTitles' ?(
                    <SelectBookTitles></SelectBookTitles>
                ):(
                <MultilineTextFields  
                value={review} 
                onChange={(e) => onChange(e.target.value)}
                />)}
            </Box>
        </Box>
    );
}