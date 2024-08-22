import React from "react";
import Navbar from "../components/elements/Navbar";
import Footer from "../components/elements/Footer";
import FeaturedProduct from "../components/fragments/FeaturedProduct";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="lg:px-[80px]">
        <h1 className="pt-20 text-center text-2xl lg:text-4xl font-extrabold">
          Tentang Kami
        </h1>
        <div className="pt-5 lg:pr-36">
          <FeaturedProduct
            apiUrl={"https://fakestoreapi.com/products/category/jewelery"}
            title={"Perhiasan"}
            color={"bg-white"}
            textColor={"text-black"}
            description={
              "Cincin berlian ini dibuat dengan menggunakan berlian berkualitas tinggi yang dipilih secara teliti untuk kilauan dan kejernihan maksimal"
            }
          />
        </div>
        <div className="mt-10 lg:pl-36">
          <FeaturedProduct
            apiUrl={
              "https://fakestoreapi.com/products/category/men's%20clothing"
            }
            title={"Pakaian Pria"}
            color={"bg-white"}
            textColor={"text-black"}
            description={
              "Mens clothing mencakup pakaian formal seperti setelan jas, dasi, kemeja, dan sepatu kulit untuk acara formal atau kerja kantor; pakaian kasual seperti kaos, jeans, celana pendek, kemeja kasual, dan sepatu olahraga untuk aktivitas sehari-hari"
            }
          />
        </div>
        <div className="mt-10 lg:pr-36">
          <FeaturedProduct
            apiUrl={
              "https://fakestoreapi.com/products/category/women's%20clothing?limit=4"
            }
            title={"Pakaian Wanita"}
            color={"bg-white"}
            description={
              "Womens clothing mencakup pakaian formal seperti gaun, blus, rok, dan setelan kerja untuk acara formal atau tempat kerja; pakaian kasual seperti kaos, jeans, legging, dan dress kasual untuk sehari-hari"
            }
          />
        </div>
        <div className="lg:px-36 my-5">
          <div className="p-3 lg:p-0 flex flex-wrap lg:justify-between gap-10">
            <div className="w-full lg:w-[45%] bg-primary rounded-lg">
              <h1 className="py-2 text-xl font-extrabold text-center text-white">
                Kritik Dan Saran
              </h1>
              <div className="my-[50px] flex flex-col items-center gap-3">
                <input
                  type="text"
                  placeholder="Masukan Nama Anda"
                  className="w-[300px] px-3 py-1 border border-black rounded-md"
                />
                <input
                  type="text"
                  placeholder="Masukan Email Anda"
                  className="w-[300px] px-3 py-1 border border-black rounded-md"
                />
                <textarea
                  name=""
                  id=""
                  className="w-[300px] px-3 py-1 border border-black rounded-md"
                ></textarea>
                <button className="mt-5 relative bg-black w-[300px] h-[35px] p-1 font-semibold rounded-md">
                  <span
                    className={`active:top-0 active:start-0 transition-all absolute flex justify-center items-center -start-1 -top-1 border w-[300px] h-[35px] bg-white rounded-md font-semibold`}
                  >
                    Submit
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-[50%] ">
              <div className="border-2 shadow-lg rounded-lg h-[400px]">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.674824982978!2d109.11949279261789!3d-6.870378737946049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb9d8ab0620cb%3A0x3a4ae326bbd092cf!2sTransmart%20Tegal!5e0!3m2!1sid!2sid!4v1722452064315!5m2!1sid!2sid"
                  title="Example Iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
