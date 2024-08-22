import { Heart, ShoppingBag } from "@phosphor-icons/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartTotalItems } from "../../redux/slices/cartSlice";

const Navbar = ({ handleOpenModalCart }) => {
  const totalItems = useSelector(selectCartTotalItems);
  return (
    <nav
      className={`fixed w-full bg-white pr-3 py-2 md:px-10 lg:px-20 flex justify-between items-center border-y-2 border-black z-40`}
    >
      <h1 className="font-extrabold ">
        Kiran <span className="text-primary">Store</span>
      </h1>
      <div className="flex gap-3 lg:gap-10">
        <Link to="/" className="hover:-mt-1 transition-all ease-in-out">
          Beranda
        </Link>
        <Link to="/about" className="hover:-mt-1 transition-all ease-in-out">
          Tentang
        </Link>
        <Link to="/product" className="hover:-mt-1 transition-all ease-in-out">
          Product
        </Link>
      </div>
      <div className="flex gap-5">
        <button className="transition-all ease-in-out">
          <Heart size={25} />
        </button>
        <button
          onClick={handleOpenModalCart}
          className="relative transition-all ease-in-out"
        >
          <span className="absolute w-[18px] h-[18px] bg-slate-900 bg-black text-white text-sm font-extrabold rounded-full -top-1.5 -right-3.5 flex items-center justify-center ">
            {totalItems}
          </span>
          <ShoppingBag size={25} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
