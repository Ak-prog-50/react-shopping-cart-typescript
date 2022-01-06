import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch } from '../../../app/hooks';
import { filterByType } from '../../shopSlice';

export default function SelectType() {
  const [type, setType] = React.useState<string>('');
  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
    dispatch(filterByType(event.target.value as string))
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"t-shirt"}>T Shirts</MenuItem>
          <MenuItem value={"dress shirts"}>Dress Shirts</MenuItem>
          <MenuItem value={"show-all"}>Show All</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}