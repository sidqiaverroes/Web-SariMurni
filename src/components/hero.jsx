import React from "react";
import { BsChevronDown } from "react-icons/bs";

function hero() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-hero-image bg-cover bg-center h-[720px]">
        <div className="flex flex-col justify-center items-center max-w-[1080px] gap-12 p-24">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className=" text-white text-xl font-extrabold">
              Selamat Datang di Website Desa
            </p>
            <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-c-gold2 to-c-lightgold text-8xl pb-4">
              Banuroja
            </h1>
            <p className="text-white text-center text-xl">
              Lorem ipsum dolor sit amet consectetur. Adipiscing enim turpis
              ultrices bibendum tellus amet nullam. Eu a morbi semper aliquam
              duis interdum tincidunt diam morbi.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-white text-base group hover:cursor-pointer">
            <p>Telusuri</p>
            <BsChevronDown className="group-hover:translate-y-2 duration-500"></BsChevronDown>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
