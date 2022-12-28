import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { readProductsData } from "../firebase";
import ProductCardList from "../components/ProductCardList";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    readProductsData().then(setProducts);
  }, []);

  return (
    <div>
      <Banner />
      <ProductCardList products={products} />
    </div>
  );
}
