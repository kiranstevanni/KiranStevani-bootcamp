import React, { useEffect, useState } from "react";
import Navbar from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import CardProduct from "../components/fragments/CardProduct";
import CartModal from "../components/fragments/CartModal";

const Product = () => {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };

  return (
    <>
      {isOpenModalCart ? (
        <CartModal handleHideModalCart={handleHideModalCart} />
      ) : null}
      <Navbar handleOpenModalCart={handleOpenModalCart} />
      <div className="py-20 px-4 lg:px-[180px]">
        <CardProduct
          apiUrl={"https://fakestoreapi.com/products/category/men's%20clothing"}
        />
        <CardProduct
          apiUrl={
            "https://fakestoreapi.com/products/category/women's%20clothing"
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default Product;
