import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full lg:h-[600px] flex justify-center items-center border border-black ">
      {/* <div className="flex ">
        <button
          onClick={handlePrevClick}
          className="p-2 bg-gray-800 text-white rounded-full"
        >
          •
        </button>
        <button
          onClick={handleNextClick}
          className="p-2 bg-gray-800 text-white rounded-full"
        >
          •
        </button>
      </div> */}
      <div className="w-full h-full flex justify-center items-center overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className=" w-full h-full flex-shrink-0">
              <img
                src={item}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
