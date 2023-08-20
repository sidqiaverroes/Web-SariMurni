import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

function Berita() {
  const berita = [
    {
      id: 1,
      title: "Ini Contoh Judul Berita yang Cukup Panjang",
      desc: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. ",
      date: "30 Juli 2023",
      image: "/berita1-img.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. In dignissim senectus rhoncus eget vestibulum mi ut libero ut.",
      date: "30 Juli 2023",
      image: "/berita2-img.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. In dignissim senectus rhoncus eget vestibulum mi ut libero ut.",
      date: "30 Juli 2023",
      image: "/berita3-img.png",
    },
    {
      id: 4,
      title: "Judul Berita",
      desc: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. In dignissim senectus rhoncus eget vestibulum mi ut libero ut.",
      date: "30 Juli 2023",
      image: "/berita4-img.png",
    },
  ];

  const selectedBerita = berita.slice(-4, -1);
  const latestBerita = berita.slice(-1);

  const titleMaxLength = 25;
  const descMaxLength = 70;

  function truncateText(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  }

  return (
    <section
      id="peta"
      className="flex justify-center items-center w-full py-24 md:px-20 px-8"
    >
      <div
        className="flex flex-col max-w-[1080px] w-full gap-12"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="text-center">Berita Terkini</h2>
          <h6 className="text-center">
            Informasi aktual tentang Desa Sari Murni.
          </h6>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-8 ">
          <div className="group flex flex-col w-full shadow-lg border border-c-gold2 rounded-md overflow-hidden hover:cursor-pointer hover:-translate-y-1 duration-200">
            <div className="w-auto h-full overflow-hidden">
              <Image
                src={latestBerita[0].image}
                alt="img"
                width={500}
                height={500}
                className="relative w-full h-full object-cover overflow-hidden group-hover:scale-105 duration-200"
              ></Image>
            </div>
            <div className="flex flex-col bg-white items-start justify-center gap-1 p-10">
              <p className="text-sm font-medium text-white bg-c-green rounded-full px-4 mb-3">
                {latestBerita[0].date}
              </p>
              <p className="text-xl font-extrabold">
                {truncateText(latestBerita[0].title, descMaxLength)}
              </p>
              <p className="text-base">
                {truncateText(latestBerita[0].desc, descMaxLength)}
              </p>
              {/* <a className="flex justify-center items-center bg-c-darkgreen text-white rounded-full px-8 py-1 hover:bg-c-green hover:translate-x-1 hover:shadow-lg shadow-md duration-200 mt-4">
                Selengkapnya
              </a> */}
            </div>
          </div>
          <div className="flex flex-col gap-8 ">
            {selectedBerita.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group flex flex-col lg:flex-row justify-center items-center lg:w-[400px] lg:h-[200px] shadow-lg border border-c-gold2 rounded-md overflow-hidden hover:cursor-pointer hover:-translate-y-1 duration-200"
                >
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt="img"
                      width={500}
                      height={500}
                      className="relative w-full h-full object-cover overflow-hidden group-hover:scale-105 duration-200"
                    ></Image>
                  </div>
                  <div className="flex flex-col justify-start items-start w-full lg:w-[250px] bg-white p-10 lg:px-6 lg:py-4 gap-2">
                    <p className="text-sm font-medium text-white bg-c-green rounded-full px-4 mb-1">
                      {item.date}
                    </p>
                    <p className="text-lg font-extrabold leading-none">
                      {truncateText(item.title, titleMaxLength)}
                    </p>
                    <p className="text-base leading-none">
                      {truncateText(item.desc, descMaxLength)}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-row w-full justify-center items-center text-c-green">
              <span className="group flex flex-row justify-center items-center hover:translate-x-1 duration-500 hover:cursor-pointer gap-1 ">
                <p className="font-medium group-hover:underline">
                  Lihat Lainnya
                </p>
                <AiOutlineArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Berita;
