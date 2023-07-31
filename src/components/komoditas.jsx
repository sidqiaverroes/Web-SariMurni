import React, { useState } from "react";
import Image from "next/image";

import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Komoditas() {
  const komoditas = [
    {
      _id: 1,
      name: "Jagung",
      desc: "Jagung adalah Lorem Ipsum",
      image: "/jagung-img.png",
    },
    {
      _id: 2,
      name: "Buah Naga",
      desc: "Buah Naga adalah Lorem Ipsum",
      image: "/buahnaga-img.png",
    },
    {
      _id: 3,
      name: "Kelapa",
      desc: "Kelapa adalah Lorem Ipsum",
      image: "/kelapa-img.png",
    },
    {
      _id: 1,
      name: "Jagung",
      desc: "Jagung adalah Lorem Ipsum",
      image: "/jagung-img.png",
    },
    {
      _id: 2,
      name: "Buah Naga",
      desc: "Buah Naga adalah Lorem Ipsum",
      image: "/buahnaga-img.png",
    },
    {
      _id: 3,
      name: "Kelapa",
      desc: "Kelapa adalah Lorem Ipsum",
      image: "/kelapa-img.png",
    },
  ];
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      <section className="flex justify-center items-center w-full bg-komoditas-image bg-cover bg-center h-[670px] relative z-0">
        <div className="flex flex-col max-w-[1080px] w-full gap gap-12">
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-white">Komoditas Unggulan</h2>
            <h6 className="text-c-lightgold">
              Lorem ipsum dolor sit amet consectetur.
            </h6>
          </div>

          <div className="flex flex-row items-center">
            <div
              onClick={() => swiper.slidePrev()}
              className="bg-white p-2 rounded-full hover:cursor-pointer hover:-translate-y-1 duration-200 text-c-darkgreen"
            >
              <BiChevronLeft size={24} />
            </div>
            <Swiper
              loop={true}
              onSwiper={(swiper) => setSwiper(swiper)}
              slidesPerView={3}
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              grabCursor
              modules={[Autoplay, Pagination, Navigation]}
              className="flex flex-row justify-center items-center"
            >
              {komoditas.map((item, index) => {
                const { _id, name, desc, image } = item;
                return (
                  <SwiperSlide key={index}>
                    <div className="flex overflow-visible justify-center items-center">
                      <div className="shadow-lg flex flex-col justify-center items-center rounded-md bg-gradient-to-r from-c-gold2 to-c-lightgold  h-[300px] w-[250px] mb-16 overflow-hidden">
                        <Image
                          src={image}
                          alt="img"
                          width={500}
                          height={500}
                          className="relative w-auto h-full object-cover overflow-hidden"
                        ></Image>
                        <div className="flex flex-row items-center justify-center gap-8 py-2">
                          <p className="text-c-darkgreen font-extrabold text-lg">
                            {name}
                          </p>
                          <a className="flex justify-center items-center bg-c-darkgreen text-white rounded-full px-4 py-1 hover:bg-c-green hover:translate-x-1 hover:shadow-lg shadow-md duration-200">
                            Pelajari
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div
              onClick={() => swiper.slideNext()}
              className="bg-white p-2 rounded-full hover:cursor-pointer hover:-translate-y-1 duration-200 text-c-darkgreen"
            >
              <BiChevronRight size={24} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Komoditas;
