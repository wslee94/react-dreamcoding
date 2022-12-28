import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readProductData, writeCartData } from "../firebase";
import { useUser } from "../context/UserContext";

export default function ProductDetail() {
  const [option, setOption] = useState("");
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [user] = useUser();

  useEffect(() => {
    readProductData(productId).then((product) => {
      setProduct(product);
      setOption(product.selectOptions[0]);
    });
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    writeCartData(user.uid, productId, option, 1);
    alert("장바구니 담기 성공");
  };

  if (!product) return null;

  return (
    <>
      <p className="text-sm text-gray-500">{`> ${product?.category}`}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <img
          className="max-w-lg w-full mx-auto"
          alt="product image"
          src={product?.image}
        />
        <div className="grow p-2">
          <p className="text-xl">{product?.name}</p>
          <p className="text-base">₩{product?.price}</p>
          <hr className="my-3" />
          <p className="text-sm text-gray">{product?.description}</p>
          <form
            className="flex flex-col gap-2 mt-10 text-sm"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="options">옵션:</label>
              <select
                id="options"
                type="select"
                onChange={(e) => setOption(e.target.value)}
              >
                {product.selectOptions.map((n, index) => (
                  <option key={index} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="bg-sky-500/80 hover:bg-sky-500/100 text-white px-2 py-2 rounded"
              type="submit"
            >
              장바구니 담기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
