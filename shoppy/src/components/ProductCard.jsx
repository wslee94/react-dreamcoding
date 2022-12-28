import React from "react";

import { Link } from "react-router-dom";
export default function ProductCard({ id, image, name, price, category }) {
  return (
    <Link className="cursor-pointer" to={`/products/${id}`}>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img className="w-full " alt="product image" src={image} />
        <div className="p-2">
          <div className="flex justify-between items-center">
            <p className="text-base">{name}</p>
            <span className="text-sm">₩{price}</span>
          </div>
          <span className="text-sm text-gray-500">{category}</span>
        </div>
      </div>
    </Link>
  );
}
