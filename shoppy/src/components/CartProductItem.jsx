import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { writeCartData } from "../firebase";
import { useUser } from "../context/UserContext";

export default function CartProductItem({
  productId,
  image,
  name,
  option,
  price,
  count,
  handleDelete,
  handleTotalPrice,
}) {
  const [currCount, setCurrCount] = useState(count);
  const [currPrice, setCurrPrice] = useState(price * count);
  const [user] = useUser();

  const handleCount = (count, amount) => {
    if (count < 0) return;
    setCurrCount(count);
    setCurrPrice(count * price);
    writeCartData(user.uid, productId, option, count);
    handleTotalPrice(amount);
  };

  return (
    <div className="flex items-center gap-3">
      <img className="rounded-lg" width={150} alt="product image" src={image} />
      <div className="flex-grow">
        <p className="text-sm text-slate-500">{name}</p>
        <p className="text-sm text-pink-500">{option}</p>
        <p className="text-xs text-slate-500">₩{currPrice}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="w-6 text-xl text-white bg-pink-500 rounded-lg"
          onClick={() => handleCount(currCount - 1, price * -1)}
        >
          -
        </button>
        <span className="text-base text-slate-500">{currCount}</span>
        <button
          className="w-6 text-xl text-white bg-pink-500 rounded-lg"
          onClick={() => handleCount(currCount + 1, price * 1)}
        >
          +
        </button>
        <button
          className="text-2xl text-sky-500"
          onClick={() => handleDelete(productId)}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
}
