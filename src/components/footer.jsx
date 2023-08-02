import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  const socmed = [
    {
      name: "Facebook",
      url: "-",
      icon: (
        <div className=" bg-c-gold2 hover:bg-c-gold hover:cursor-pointer rounded-full p-3 text-c-darkgreen shadow-md">
          <BsFacebook />
        </div>
      ),
    },
    {
      name: "Instagram",
      url: "-",
      icon: (
        <div className=" bg-c-gold2 hover:bg-c-gold hover:cursor-pointer rounded-full p-3 text-c-darkgreen shadow-md">
          {" "}
          <BsInstagram />
        </div>
      ),
    },
    {
      name: "Youtube",
      url: "-",
      icon: (
        <div className=" bg-c-gold2 hover:bg-c-gold hover:cursor-pointer rounded-full p-3 text-c-darkgreen shadow-md">
          <BsYoutube />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center bg-c-green py-[96px]">
          <div className="flex flex-row max-w-[1080px] gap-24 justify-between w-full">
            <div className="flex flex-col gap-4 w-1/2 text-white">
              <h1 className=" text-2xl">Desa Banuroja</h1>
              <p className="text-base">
                Desa Banuroja adalah desa transmigrasi yang terletak di
                Kecamatan Randangan, Kabupaten Pohuwato, Provinsi Gorontalo.
                Desa Banuroja dijuluki sebagai &quot;Desa Pancasila&quot; karena
                masyarakatnya yang heterogen.
              </p>
              <div id="socmed" className="flex flex-row gap-4 pt-2">
                {socmed.map((item, index) => (
                  <ul key={index}>{item.icon}</ul>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2 text-white">
              <h1 className=" text-2xl">Kontak</h1>
              <div className="flex flex-col gap-1 text-base">
                <p>
                  Banuroja, Kec. Randangan, Kabupaten Pohuwato, Gorontalo 96469
                </p>
                <p>Email: asdasdasdsa</p>
                <p>No.Telp: +62852-3828-3882</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-c-darkgreen">
          <div className="flex flex-row max-w-[1080px] text-base justify-between w-full py-8">
            <h1 className="text-c-gold2">Website Desa</h1>
            <p className="text-c-lightgold">
              KKN-PPM Universitas Gadjah Mada Randangan Benderang 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
