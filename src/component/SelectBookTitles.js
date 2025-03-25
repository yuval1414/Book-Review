import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectBookTitles(allBookTitels) {
    const [bookTitle, setABookTitle] = React.useState(' ');

    const handleChange = (event) => {
        setABookTitle(event.target.value);
      };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bookTitle}
            label="Book Title"
            onChange={handleChange}
          >
            <MenuItem >Ten</MenuItem>
            <MenuItem >Twenty</MenuItem>
            <MenuItem >Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );


}