import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
const FilterPrice = ({
  productsData,
  setProductsByPrice,
  priceRange,
  setPriceRange,
  getMinMaxPrice,
}) => {
  // const [value, setValue] = useState(priceRange);
  const [min, setMin] = useState(priceRange[0]);
  const [max, setMax] = useState(priceRange[1]);
  const marks = [
    {
      value: priceRange[0],
      label: `${priceRange[0]}$`,
    },
    {
      value: priceRange[1],
      label: `${priceRange[1]}$`,
    },
  ];

  useEffect(() => {
    let minmax = getMinMaxPrice(productsData);
    setMin(minmax[0]);
    setMax(minmax[1]);
  }, [getMinMaxPrice, productsData]);

  // useEffect(() => {
  //   if (priceRange[0] === min && priceRange[1] === max) {
  //     setProductsByPrice(productsData);
  //   }
  // }, [max, min, priceRange, productsData, setProductsByPrice]);

  function valueText(value) {
    return `${value}$`;
  }

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    let newProducts = productsData.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
    setProductsByPrice(newProducts);
  };
  return (
    <>
      <h2>Price</h2>
      <div>
        <p>
          Ranger: {priceRange[0]}$ - {priceRange[1]}$
        </p>
        <Slider
          sx={{ width: 200 }}
          getAriaLabel={() => "Price range"}
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          min={min}
          max={max}
          marks={marks}
        />
      </div>
    </>
  );
};

export default FilterPrice;
