import {
  ArrowRight,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="p-14 flex flex-col justify-center items-center bg-primary">
        <h1 className="font-Poppins text-xl lg:text-3xl font-bold text-white">
          Potongan Diskon 20%
        </h1>
        <h1 className="font-Poppins text-xl lg:text-3xl font-bold text-white">
          Khusus Buat Kamu
        </h1>
        <Link
          to=""
          className="mt-5 bg-black text-white font-Rubik font-semibold px-12 lg:px-20 py-2 rounded-md shadow-md shadow-white"
        >
          Lihat Produk
        </Link>
      </div>
      <div className="px-2 lg:px-10 py-10 lg:py-20 flex flex-wrap  bg-black text-white ">
        <div className="w-full lg:w-[80%]">
          <div>
            <h1 className="font-Poppins opacity-85 text-lg lg:text-2xl ">
              Dapatkan Diskon 20%
            </h1>
            <h1 className="font-Poppins opacity-85 text-lg lg:text-2xl ">
              Khusus Untuk Hari ini. Kunjungi Produk Sekarang!
            </h1>
          </div>
          <div className="w-[350px] lg:w-[470px] mt-5 flex justify-between items-center bg-white ">
            <h1 className="w-[90%] px-3 py-2 text-xs text-black font-semibold">
              Kunjungi Produk Sekarang
            </h1>
            <Link
              to=""
              className="w-[10%] pl-1 py-2 bg-primary text-black border-l-2 border-black"
            >
              <ArrowRight size={28} />
            </Link>
          </div>
        </div>
        <div className="lg:w-[20%] mt-10 lg:mt-0">
          <div className=" grid grid-cols-2 gap-5 text-sm">
            <p className="opacity-80 hover:opacity-100">Bantuan</p>
            <p className="opacity-80 hover:opacity-100">Pertanyaan</p>
            <p className="opacity-80 hover:opacity-100">Tentang</p>
            <p className="opacity-80 hover:opacity-100">Comunity</p>
            <p className="opacity-80 hover:opacity-100">support</p>
            <p className="opacity-80 hover:opacity-100">Perjalanan</p>
            <p className="opacity-80 hover:opacity-100">Kebijakan</p>
            <p className="opacity-80 hover:opacity-100">Perusahaan</p>
            <p className="opacity-80 hover:opacity-100">Produk</p>
          </div>
          <div className="mt-10 flex gap-10">
            <TwitterLogo size={28} />
            <YoutubeLogo size={28} />
            <InstagramLogo size={28} />
            <FacebookLogo size={28} />
            <GithubLogo size={28} />
          </div>
        </div>
        <p className="mt-10 lg:-mt-5 opacity-70 text-sm">
          @build by Kiran Stevanni
        </p>
      </div>
      <hr className="opacity-70" />
      <div className="flex justify-center bg-black ">
        <p className="text-white opacity-85 text-sm font-light">
          &copy; 2024 Kiran Stevanni. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
