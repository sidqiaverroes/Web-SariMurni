import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Footer() {
  const socmed = [
    {
      name: "Facebook",
      url: "-",
      icon: (
        <Link href="" target="_blank">
          <div className=" bg-c-gold2 hover:bg-c-gold hover:cursor-pointer rounded-full p-3 text-c-darkgreen shadow-md">
            <BsFacebook />
          </div>
        </Link>
      ),
    },
    {
      name: "Instagram",
      url: "-",
      icon: (
        <Link
          href="https://www.instagram.com/randanganbenderang/"
          target="_blank"
        >
          <div className=" bg-c-gold2 hover:bg-c-gold hover:cursor-pointer rounded-full p-3 text-c-darkgreen shadow-md">
            <BsInstagram />
          </div>
        </Link>
      ),
    },
    {
      name: "Youtube",
      url: "-",
      icon: (
        <Link href="" target="_blank">
          <div className=" bg-c-gold2 hover:bg-c-gold hover:cursor-pointer rounded-full p-3 text-c-darkgreen shadow-md">
            <BsYoutube />
          </div>
        </Link>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center w-full bg-c-green py-[96px] md:px-20 px-8">
          <div className="flex flex-col lg:flex-row justify-center items-start max-w-[1080px] gap-24 w-full">
            <div className="flex flex-col w-full lg:w-1/2 gap-4 text-white">
              <h1 className=" text-2xl">Desa Sari Murni</h1>
              <p className="text-base">
                Desa Sari Murni adalah desa transmigrasi yang terletak di
                Kecamatan Randangan, Kabupaten Pohuwato, Provinsi Gorontalo.
                Desa Sari Murni dijuluki sebagai &quot;Desa Pancasila&quot;
                karena masyarakatnya yang heterogen.
              </p>
              <div id="socmed" className="flex flex-row gap-4 pt-2">
                {socmed.map((item, index) => (
                  <ul key={index}>{item.icon}</ul>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-4  text-white">
              <h1 className=" text-2xl">Kontak</h1>
              <div className="flex flex-col gap-1 text-base">
                <p>
                  Sari Murni, Kec. Randangan, Kabupaten Pohuwato, Gorontalo
                  96469
                </p>
                <p>Email: asdasdasdsa</p>
                <p>No.Telp: +62852-3828-3882</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-c-darkgreen md:px-20 px-8">
          <div className="flex flex-col lg:flex-row max-w-[1080px] text-base gap-2 lg:justify-between w-full lg:py-4 py-8">
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
