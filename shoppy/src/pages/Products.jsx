import React, { useState, useEffect } from "react";
import { readProductsData } from "../firebase";
import ProductCardList from "../components/ProductCardList";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    readProductsData().then(setProducts);
  }, []);

  return (
    <div className="my-4">
      <ProductCardList products={products} />
    </div>
  );
}
