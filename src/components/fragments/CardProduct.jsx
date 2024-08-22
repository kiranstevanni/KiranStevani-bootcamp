import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { Heart, ShoppingCartSimple } from "@phosphor-icons/react";

const CardProduct = ({ apiUrl, color }) => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  const handleClickBuy = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="relative bg-white shadow-lg hover:border hover:border-black rounded-md"
            >
              <div className="w-[90%] h-[150px] lg:h-[150px] p-5 mx-auto overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-[130px] object-contain "
                />
              </div>
              <div className="mb-14 lg:mb-20 px-2 py-4">
                <p>{product.title}</p>
                <p className="font-semibold">${product.price}</p>
              </div>
              <div className="absolute bottom-0 flex gap-3">
                <button
                  onClick={() => handleClickBuy(product)}
                  className=" p-2 font-semibold text-black"
                >
                  <ShoppingCartSimple size={25} />
                </button>
                <button
                  onClick={() => handleClickBuy(product)}
                  className=" p-2 font-semibold text-black"
                >
                  <Heart size={25} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardProduct;
