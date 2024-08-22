import React, { useEffect, useState } from "react";

const FeaturedProduct = ({ apiUrl, title, color, textColor, description }) => {
  const [product, setProduct] = useState([]);

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
  return (
    <div className="my-10">
      <div className={`p-2 lg:p-5 flex flex-wrap ${color} rounded-lg`}>
        <div
          className={`lg:w-[25%] p-5 flex flex-col justify-center items-center ${textColor}`}
        >
          <div className="mb-5 flex items-center gap-2">
            <h1 className="font-Rubik text-xl font-extrabold">{title}</h1>
          </div>
          <h1 className=" font-Poppins">{description}</h1>
        </div>
        <div className="lg:w-[75%] mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {product.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-black bg-white rounded-lg shadow-md hover:border-white  hover:shadow-white"
              >
                <div className="w-[90%] h-[150px] lg:h-[180px] p-5 mx-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-contain "
                  />
                </div>
                <hr />
                <div className="px-4 py-2">
                  <h1>{item.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
