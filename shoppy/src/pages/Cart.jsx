import React, { useEffect, useState } from "react";
import { readCartsData, deleteCartsData } from "../firebase";
import { useUser } from "../context/UserContext";
import CartProductItem from "../components/CartProductItem";

export default function Cart() {
  const [user] = useUser();
  const [products, setProduct] = useState([]);
  const [deliveryFee] = useState(3000);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartProducts = () => {
    readCartsData(user.uid).then(setProduct);
  };

  useEffect(() => {
    if (user?.uid) {
      fetchCartProducts();
    }
  }, [user]);

  useEffect(() => {
    if (products) {
      setTotalPrice(
        products.reduce((acc, curr) => {
          return (acc += curr.price * curr.count);
        }, 0)
      );
    }
  }, [products]);

  const handleTotalPrice = (price) => {
    setTotalPrice((prev) => (prev += price));
  };

  const handleDelete = async (productId) => {
    await deleteCartsData(user.uid, productId);
    fetchCartProducts();
  };

  return (
    <div>
      <p className="text-2xl font-bold text-center my-2 text-sky-500">
        내 장바구니
      </p>
      <hr className="my-2" />
      <ul className="flex flex-col gap-3">
        {products.map((p) => (
          <li key={p.productId}>
            <CartProductItem
              productId={p.productId}
              image={p.image}
              name={p.name}
              option={p.option}
              price={p.price}
              count={p.count}
              handleDelete={handleDelete}
              handleTotalPrice={handleTotalPrice}
            />
          </li>
        ))}
      </ul>
      <ul className="flex justify-around my-6">
        <li className="bg-gray-200 rounded-lg flex flex-col justify-center items-center p-4">
          <p className="text-slate-700">상품 총액</p>
          <p className="text-sm text-pink-500">₩{totalPrice}</p>
        </li>
        <li className="rounded-lg flex flex-col justify-center items-center p-4">
          <span className="bg-black text-white w-5 h-5 flex justify-center items-center rounded-full">
            +
          </span>
        </li>
        <li className="bg-gray-200 rounded-lg flex flex-col justify-center items-center p-4">
          <p className="text-slate-700">상품 총액</p>
          <p className="text-sm text-pink-500">₩{deliveryFee}</p>
        </li>
        <li className="rounded-lg flex flex-col justify-center items-center p-4">
          <span className="bg-black text-white w-5 h-5 flex justify-center items-center rounded-full">
            =
          </span>
        </li>
        <li className="bg-gray-200 rounded-lg flex flex-col justify-center items-center p-4">
          <p className="text-slate-700">총 가격</p>
          <p className="text-sm text-pink-500">₩{totalPrice + deliveryFee}</p>
        </li>
      </ul>
      <button className="w-full p-2 text-white bg-pink-500 rounded-lg">
        주문하기
      </button>
    </div>
  );
}
