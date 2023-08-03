import React, { useState } from "react";
import Image from "next/image";

const GalleryItem = ({ imageSrc, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group flex flex-col w-auto h-[300px] bg-white hover:translate-y-0 hover:shadow-lg hover:cursor-pointer shadow-md duration-200 lg:hover14"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt="galeri-img"
        className=" w-full h-full object-cover overflow-hidden group-hover:scale-110 duration-200 hover:cursor-pointer"
      ></Image>
      {isHovered && (
        <div
          className={`absolute bottom-0 w-full ${
            isHovered ? "block" : "hidden"
          }`}
        >
          <p className="flex w-full justify-center items-center text-c-lightgold font-bold galleryTitle py-1">
            {title}
          </p>
        </div>
      )}
    </div>
  );
};

function Galeri() {
  const galeri = [
    {
      title: "galeri1",
      image: "/galeri1.png",
    },
    {
      title: "galeri2",
      image: "/galeri2.png",
    },
    {
      title: "galeri3",
      image: "/galeri3.png",
    },
    {
      title: "galeri4",
      image: "/galeri4.png",
    },
    {
      title: "galeri5",
      image: "/galeri5.png",
    },
    {
      title: "galeri6",
      image: "/galeri6.png",
    },
  ];

  const selectedGaleri = galeri.slice(-6);

  return (
    <>
      <section
        className="flex justify-center items-center w-full py-24 bg-gradient-to-t from-c-gold2 to-c-lightgold"
        data-aos="fade-up"
      >
        <div className="flex flex-col max-w-[1080px] gap-8">
          <div className="flex justify-center items-center w-full">
            <h2>Galeri</h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-8 lg:px-0">
            {selectedGaleri.map((item, index) => {
              return (
                <span key={index} className="overflow-hidden rounded-lg">
                  <GalleryItem
                    imageSrc={item.image}
                    title={item.title}
                  ></GalleryItem>
                </span>
              );
            })}
          </div>
          <div className="flex w-full justify-center items-center">
            <a className="flex justify-center items-center bg-c-darkgreen text-white rounded-full px-4 py-1 hover:bg-c-green hover:-translate-y-1 hover:shadow-lg shadow-md duration-200">
              Selengkapnya
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Galeri;
