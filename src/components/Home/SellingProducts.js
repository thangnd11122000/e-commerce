import React from "react";
import ProductSlide from "../Product/ProductSlide";
import {productsData} from '../../data'
const SellingProducts = () => {
  return (
    <div className="selling-product">
      <div className="component-header">
        <h3>San pham ban chay</h3>
        <span>Xem tat ca</span>
      </div>
      <ProductSlide products={productsData} />
    </div>
  );
};

export default SellingProducts;
