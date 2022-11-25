import { useState, useEffect } from "react";
import { ProductCard } from "./Card";
import { StyledProductList } from "./styles";

export function ProductList({ products, addToCart }) {
  return (
    <StyledProductList>
      {products?.map(({ name, price, img, category, id }) => (
        <ProductCard
          img={img}
          category={category}
          name={name}
          price={price}
          addToCart={addToCart}
          key={id}
        />
      ))}
    </StyledProductList>
  );
}
