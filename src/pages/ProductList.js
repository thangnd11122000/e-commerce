import React, { useCallback } from "react";
import { newProductsData } from "../data";
import { useState } from "react";
import { useEffect } from "react";
import FilterCategories from "../components/ProductList/FilterCategories";
import FilterPrice from "../components/ProductList/FilterPrice";
import FilterWeight from "../components/ProductList/FilterWeight";
import SelectedFilter from "../components/ProductList/SelectedFilter";
import Sorting from "../components/ProductList/Sorting";
import Display from "../components/ProductList/Display";
import { unique } from "../helpers/unique";

const ProductList = () => {
  const [products, setProducts] = useState(newProductsData);
  const [filterCategories, setFilterCategories] = useState([]);
  const [productsByPrice, setProductsByPrice] = useState(products);
  const [filterWeight, setFilterWeight] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 999999]);
  const [sorting, setSorting] = useState("");
  const [numberLayout, setNumberLayout] = useState(4);
  const [numberPerPage, setNumberPerPage] = useState(numberLayout * 2);
  const productsByCategories = (products, categories = []) => {
    if (categories.length === 0) {
      return products;
    }
    let newProducts = [];
    categories.forEach((c) => {
      let productByCat = products.filter((p) => p.category_id === c);
      newProducts = [...newProducts, ...productByCat];
    });
    return newProducts;
  };

  const getMinMaxPrice = (productsData) => {
    let price = [];
    productsData.map((p) => (price = [...price, p.price]));
    let minPrice = price.reduce((t, v) => (t < v ? t : v));
    let maxPrice = price.reduce((t, v) => (t > v ? t : v));
    return [minPrice, maxPrice];
  };

  const productsByWeight = useCallback((products, weight = []) => {
    if (weight.length === 0) {
      return products;
    }
    let newProducts = [];
    weight.forEach((w) => {
      let productByWeight = products.filter((p) => p.weight <= w);
      newProducts = [...newProducts, ...productByWeight];
    });
    newProducts = unique(newProducts);
    return newProducts;
  }, []);

  const productsBySorting = (products, value) => {
    switch (value) {
      case "low":
        return products.sort((a, b) => (a.price < b.price ? 1 : -1));
      case "high":
        return products.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return products;
    }
  };

  useEffect(() => {
    setPriceRange(getMinMaxPrice(newProductsData));
  }, []);

  useEffect(() => {
    let productsPrice = productsByPrice;
    let productsCat = productsByCategories(productsPrice, filterCategories);
    let productsWeight = productsByWeight(productsCat, filterWeight);
    let productsSorting = productsBySorting(productsWeight, sorting);
    setProducts(productsSorting);
    return () => {
      productsByCategories();
      productsByWeight();
      productsBySorting();
    };
  }, [
    filterCategories,
    filterWeight,
    productsByPrice,
    productsByWeight,
    sorting,
  ]);

  useEffect(() => {
    setNumberPerPage(numberLayout * 2);
  }, [numberLayout]);

  return (
    <>
      <div className="product-list">
        <div className="product-list__filter">
          <div className="product-list__filter--box">
            <FilterCategories
              filterCategories={filterCategories}
              setFilterCategories={setFilterCategories}
            />
          </div>
          <div className="product-list__filter--box">
            <FilterPrice
              productsData={newProductsData}
              setProductsByPrice={setProductsByPrice}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              getMinMaxPrice={getMinMaxPrice}
            />
          </div>
          <div className="product-list__filter--box">
            <FilterWeight
              filterWeight={filterWeight}
              setFilterWeight={setFilterWeight}
            />
          </div>
        </div>

        <div className="product-list__products">
          <div className="product-list__selection">
            <Sorting setSorting={setSorting} sorting={sorting} />
            <Display
              numberLayout={numberLayout}
              setNumberLayout={setNumberLayout}
            />
            <p>{products.length} products</p>
          </div>
          <SelectedFilter
            filterCategories={filterCategories}
            setFilterCategories={setFilterCategories}
            filterWeight={filterWeight}
            setFilterWeight={setFilterWeight}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            getMinMaxPrice={getMinMaxPrice}
            productsData={newProductsData}
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;
