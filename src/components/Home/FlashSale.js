import React from "react";
import { categoriesData, productsData } from "../../data";
import ProductTab from "../Product/ProductTab";

const FlashSale = () => {
  return (
    <div className="flash-sale">
      <ProductTab
        title="Flash Sale"
        categoriesData={categoriesData}
        productsData={productsData}
      />
    </div>
  );
};

export default FlashSale;
