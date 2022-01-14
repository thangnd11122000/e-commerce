import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const weights = [50, 100, 150, 200];

const FilterWeight = ({ filterWeight, setFilterWeight }) => {
  const setChecked = (value) => {
    return filterWeight.includes(value);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      let weight = [...filterWeight, parseInt(e.target.value)];
      setFilterWeight(weight);
    } else {
      let weight = filterWeight.filter((w) => w !== parseInt(e.target.value));
      if (weight.length === 0) {
        setFilterWeight([]);
      } else {
        setFilterWeight(weight);
      }
    }
  };
  return (
    <>
      <h2>Weight</h2>
      <div>
        {weights.map((w, i) => (
          <FormControlLabel
            key={i}
            value={w}
            control={<Checkbox onChange={(e) => handleChange(e)} />}
            label={"<" + w + "g"}
            checked={setChecked(w)}
          />
        ))}
      </div>
    </>
  );
};

export default FilterWeight;
