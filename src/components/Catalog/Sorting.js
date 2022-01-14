import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Sorting = ({ setSorting, sorting }) => {
  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <Box sx={{ width: 120, height: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          label="Sorting"
          onChange={handleChange}
        >
          <MenuItem value="">Default</MenuItem>
          <MenuItem value="low">Price low to high</MenuItem>
          <MenuItem value="high">Price high to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sorting;
