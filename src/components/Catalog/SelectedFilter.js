import React, { useEffect, useState } from "react";
import { categoriesData } from "../../data";
import uppercaseFirstLetter from "../../utils/string";

const SelectedFilter = ({
  filterCategories,
  setFilterCategories,
  filterWeight,
  setFilterWeight,
  priceRange,
  setPriceRange,
  getMinMaxPrice,
  productsData,
}) => {
  const [range, setRange] = useState([]);

  let categories = [];
  filterCategories.forEach((c) => {
    categories = [...categories, ...categoriesData.filter((d) => d.id === c)];
  });
  useEffect(() => {
    setRange(getMinMaxPrice(productsData));
  }, [getMinMaxPrice, productsData]);

  const removeFilter = (filters, setFilters, value) => {
    setFilters(filters.filter((c) => c !== value));
  };

  return (
    <div className="catalog__selected-filter">
      <p>Filter: </p>
      {filterCategories.length > 0 &&
        categories.map((c) => (
          <div key={c.id}>
            Category: {uppercaseFirstLetter(c.name)}{" "}
            <button
              onClick={() =>
                removeFilter(filterCategories, setFilterCategories, c.id)
              }
            >
              X
            </button>
          </div>
        ))}
      {/* {priceRange[0] === range[0] && priceRange[1] === range[1] ? (
        <></>
      ) : (
        <div>
          Price: {priceRange[0]}$ - {priceRange[1]}$
          <button onClick={() => setPriceRange(range)}>
            X
          </button>
        </div>
      )} */}
      {filterWeight.length > 0 &&
        filterWeight.map((w, i) => (
          <div key={i}>
            Weight: {w}g{" "}
            <button
              onClick={() => removeFilter(filterWeight, setFilterWeight, w)}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
};

export default SelectedFilter;
