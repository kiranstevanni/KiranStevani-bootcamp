import "../App.css";
import Navbar from "../components/elements/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/elements/Footer";
import { Wallet } from "@phosphor-icons/react";
import FeaturedProduct from "../components/fragments/FeaturedProduct";
import CardProduct from "../components/fragments/CardProduct";

const Beranda = () => {
  return (
    <>
      <Navbar />
      <div className="py-2 lg:px-[100px]">
        <div className="mt-10 lg:px-[50px] flex justify-between items-center">
          <div className="">
            <h1 className="font-Rubik font-extrabold font-Inter lg:font-bold text-xl lg:text-5xl">
              Belanja Mudah dengan Sekali Klik
            </h1>
            <button className="mt-5 relative bg-black w-[170px] lg:w-[300px] h-[35px] p-1 font-semibold rounded-md">
              <span
                className={`active:top-0 active:start-0 transition-all absolute flex justify-center items-center -start-1 -top-1 w-[170px] lg:w-[300px] h-[35px] bg-primary text-white rounded-md font-bold`}
              >
                <Link to="/product">Kunjungi Produk</Link>
              </span>
            </button>
          </div>
          <div className="w-[500px] lg:w-[800px] ">
            <img src="/bg/cart.png" alt="" className="w-full" />
          </div>
        </div>
        <FeaturedProduct
          apiUrl={"https://fakestoreapi.com/products?limit=4"}
          title={"produk Unggulan Kami"}
          color={"bg-primary"}
          textColor={"text-white"}
          description={
            "Produk unggulan dalam perusahaan fashion kami adalah koleksi jaket kulit premium mereka, yang telah menjadi identitas merek dan sangat populer di kalangan konsumen. Jaket ini dibuat dari bahan kulit berkualitas tinggi dengan desain yang stylish dan modern"
          }
        />
        <CardProduct apiUrl={"https://fakestoreapi.com/products?limit=4"} />
        <div className="my-20 lg:my-44">
          <div className="mb-8 lg:mb-14 flex justify-center items-center gap-3">
            <h1 className=" text-lg lg:text-3xl font-bold">Payments Partner</h1>
            <Wallet className="w-6 h-6 lg:w-12 lg:h-12 " />
          </div>
          <div className=" grid grid-cols-4 gap-5 lg:flex lg:justify-center lg:gap-10">
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/1.png" alt="" className="w-full" />
            </div>
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/2.png" alt="" className="w-full" />
            </div>
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/3.png" alt="" className="w-full" />
            </div>
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/4.png" alt="" className="w-full" />
            </div>
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/5.png" alt="" className="w-full" />
            </div>
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/6.png" alt="" className="w-full" />
            </div>
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/7.png" alt="" className="w-full" />
            </div>
            <div className="border border-black w-[70px] lg:w-[120px] p-1 bg-white rounded-md shadow-md">
              <img src="/payments/8.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Beranda;
