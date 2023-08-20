import React from "react";
import { BsChevronDown } from "react-icons/bs";

function Hero() {
  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("peta");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full bg-hero-image bg-cover bg-center h-[720px] md:px-20 px-8">
        <div
          className="flex flex-col justify-center items-center w-full max-w-[1080px] gap-12 mt-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col justify-center items-center w-full gap-4">
            <p className="flex justify-center w-full text-white text-base lg:text-xl font-extrabold text-center">
              Selamat Datang di Website Desa
            </p>
            <h1 className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-c-darkgold via-c-lightgold to-c-darkgold text-6xl sm:text-7xl lg:text-8xl pb-4">
              Sari Murni
            </h1>
            <p className="text-white text-center text-base lg:text-xl">
              Desa Sari Murni adalah desa transmigrasi yang terletak di
              Kecamatan Randangan, Kabupaten Pohuwato, Provinsi Gorontalo. Desa
              Banuroja dijuluki sebagai &quot;Desa Pancasila&quot; karena
              masyarakatnya yang heterogen.
            </p>
          </div>
          <a
            href="#peta"
            onClick={handleClick}
            className="flex flex-col justify-center items-center text-white text-base group hover:cursor-pointer"
          >
            <p>Telusuri</p>
            <BsChevronDown className=" animate-translateDown"></BsChevronDown>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
