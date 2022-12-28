import React from "react";
import ProductCard from "./ProductCard";

export default function ProductCardList({ products }) {
  return (
    <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
          category={p.category}
        />
      ))}
    </ul>
  );
}
