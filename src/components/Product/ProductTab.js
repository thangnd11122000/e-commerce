import { useState } from "react";
import ProductSlide from "./ProductSlide";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ArrowRight } from "@mui/icons-material";

const a11yProps = (index) => {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  };
};

const ProductTab = ({ title, categoriesData, productsData }) => {
  const newCategories = [{ id: 0, name: "all" }, ...categoriesData];
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState(newCategories);
  const [products, setProducts] = useState(productsData);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (id) => {
    if (id === 0) {
      setProducts(productsData);
      return;
    }
    const newProduct = productsData.filter((p) => p.category_id === id);
    setProducts(newProduct);
  };
  return (
    <div className="product-tab">
      <div className="product-tab__header">
        <p className="product-tab__header--all">Xem tat ca {">"}</p>
        <h3>{title}</h3>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="product tabs"
            className="product-tab__header--tabs"
          >
            {categories.map((c, i) => (
              <Tab
                key={i}
                label={c.name}
                {...a11yProps(i)}
                onClick={() => handleClick(i)}
                className="product-tab__header--button"
              />
            ))}
          </Tabs>
        </Box>
      </div>
      {categories.map((c, i) => (
        <div
          className="product-tab__content"
          role="tabpanel"
          hidden={value !== i}
          id={`product-tabpanel-${i}`}
          aria-labelledby={`product-tab-${i}`}
          key={i}
        >
          <ProductSlide value={value} index={i} products={products} />
        </div>
      ))}
    </div>
  );
};

export default ProductTab;
