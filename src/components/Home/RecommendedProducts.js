import { Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import { recommendedProductsData as products } from "../../data";
import usePagination from "../Pagination/Pagination";
import Product from "../Product/Product";

const RecommendedProducts = () => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(products.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <div className="recommended-products">
      <div className="component-header">
        <h3>Danh cho ban</h3>
        <span>Xem tat ca</span>
      </div>

      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 6, md: 8, lg: 12, xl: 12 }}
        className="recommended-products__container"
      >
        {_DATA.currentData().map((d, i) => (
          <Grid item xs={2} key={i}>
            <Product product={d} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        className="recommended-products__pagination"
        count={count}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default RecommendedProducts;
