import React from "react";
import Product from "../Product";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.numberLayout},
    minmax(auto, 1fr)
  );
  gap: 20px 20px;
  margin: 30px 0;
`;

const Products = ({ products, numberLayout = 4 }) => {
  return (
    <Container numberLayout={numberLayout}>
      {products ? (
        products.map((p) => <Product product={p} key={p.id} />)
      ) : (
        <h2>No product</h2>
      )}
    </Container>
  );
};

export default Products;
