import React from 'react';
import { Box, TextField } from '@mui/material';

export default function MultilineTextFields({ lable, value, onChange }) {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
      noValidate
      autoComplete="off"
    >
      {lable}:  <TextField 
        id="outlined-multiline-static"
        multiline
        rows={4}
        value={value}
        onChange={onChange}

      />

    </Box>
  );
}