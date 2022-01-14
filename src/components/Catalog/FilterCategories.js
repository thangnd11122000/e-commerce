import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { categoriesData } from "../../data";
import uppercaseFirstLetter from "../../utils/string";

const FilterCategories = ({ filterCategories, setFilterCategories }) => {
  const setChecked = (value) =>{
    return filterCategories.includes(value);
  }

  const handleChange = (e) => {
    if (e.target.checked) {
      let categories = [...filterCategories, parseInt(e.target.value)];
      setFilterCategories(categories);
    } else {
      let categories = filterCategories.filter(
        (c) => c !== parseInt(e.target.value)
      );
      if (categories.length === 0) {
        setFilterCategories([]);
      } else {
        setFilterCategories(categories);
      }
    }
  };
  return (
    <>
      <h2>Categories</h2>
      <div>
        {categoriesData.map((c, i) => (
          <FormControlLabel
            key={i}
            value={c.id}
            control={<Checkbox onChange={(e) => handleChange(e)} />}
            label={uppercaseFirstLetter(c.name)}
            checked={setChecked(c.id)}
          />
        ))}
      </div>
    </>
  );
};

export default FilterCategories;
