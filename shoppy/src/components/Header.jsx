import React from "react";
import { signInGoogle, signOutGoogle } from "../firebase";
import { CgShoppingBag } from "react-icons/cg";
import { GiClothes } from "react-icons/gi";
import { BsCart2, BsFillPencilFill } from "react-icons/bs";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useUser();

  const handleLogin = async () => {
    const result = await signInGoogle();
    setUser(result);
  };

  const handleLogout = async () => {
    const result = await signOutGoogle();
    setUser(result);
  };

  return (
    <div className="flex justify-between items-center mb-1">
      <Link
        className="flex items-center gap-2 text-sky-600 font-semibold cursor-pointer"
        to="/"
      >
        <CgShoppingBag className="text-3xl" />
        <h1 className="text-2xl">Shoppy</h1>
      </Link>
      <div className="flex items-center gap-2">
        <Link className="cursor-pointer" to="/products">
          <GiClothes className="text-2xl" />
        </Link>
        <Link className="cursor-pointer" to="/cart">
          <BsCart2 className="text-2xl" />
        </Link>
        <Link className="cursor-pointer" to="/product/registration">
          <BsFillPencilFill className="text-2xl" />
        </Link>

        {user ? (
          <>
            <div className="flex items-center gap-1 shrink-0">
              <img
                className="rounded-full"
                width={25}
                height={25}
                alt="avatar"
                src={user.photoURL}
              />
              <span className="text-sm font-semibold">{user.displayName}</span>
            </div>

            <button
              className="bg-sky-500/80 hover:bg-sky-500/100 text-white px-5 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-sky-500/80 hover:bg-sky-500/100 text-white px-5 py-1 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
