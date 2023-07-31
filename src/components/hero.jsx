import React from "react";
import { BsChevronDown } from "react-icons/bs";

function Hero() {
  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("peta");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full bg-hero-image bg-cover bg-center h-[720px]">
        <div className="flex flex-col justify-center items-center max-w-[1080px] gap-12 p-24 mt-10">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className=" text-white text-xl font-extrabold">
              Selamat Datang di Website Desa
            </p>
            <h1 className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-c-darkgold via-c-lightgold to-c-darkgold text-8xl pb-4">
              Banuroja
            </h1>
            <p className="text-white text-center text-xl">
              Lorem ipsum dolor sit amet consectetur. Adipiscing enim turpis
              ultrices bibendum tellus amet nullam. Eu a morbi semper aliquam
              duis interdum tincidunt diam morbi.
            </p>
          </div>
          <a
            href="#peta"
            onClick={handleClick}
            className="flex flex-col justify-center items-center text-white text-base group hover:cursor-pointer"
          >
            <p>Telusuri</p>
            <BsChevronDown className="group-hover:translate-y-2 duration-500"></BsChevronDown>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
