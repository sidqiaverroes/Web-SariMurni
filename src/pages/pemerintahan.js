import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

function Pemerintahan() {
  const handleClick = (event, id) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const offset = -80; // Adjust the offset value as needed
      const target =
        targetElement.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections in the page
      const sections = document.querySelectorAll(".section");

      // Find the section that is currently in the viewport
      let activeSectionId = null;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          activeSectionId = section.id;
          // console.log("top: ", rect.top);
          // console.log("bottom: ", rect.bottom);
          // console.log(window.innerHeight);
          break;
        }
      }

      setActiveSection(activeSectionId);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = [
    {
      id: "perangkat1",
      title: "Kepala Desa",
      name: "Rony Handri Koyansow",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa-img.jpg",
    },
    {
      id: "perangkat3",
      title: "Sekretaris Desa",
      name: "Muhammad Karyadi",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat4",
      title: "Kepala Seksi Pemerintahan",
      name: "Ahmad Faiz",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat5",
      title: "Kepala Seksi Kesejahteraan Rakyat",
      name: "Yulise Rosita",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat6",
      title: "Kepala Seksi Pelayanan",
      name: "Ni Kadek Evi Ekayuni",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat7",
      title: "Kepala Urusan Umum",
      name: "Ni Wayan Fitriyani",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat8",
      title: "Kepala Urusan Perencanaan",
      name: "Ni Ketut Murni",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat9",
      title: "Kepala Urusan Keuangan",
      name: "Ester Linda Feronika Walean",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat10",
      title: "Kepala Dusun I",
      name: "I Wayan Suastana",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat11",
      title: "Kepala Dusun II",
      name: "I Wayan Suratnya",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat12",
      title: "Kepala Dusun III",
      name: "Ruspian Majid",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
    {
      id: "perangkat13",
      title: "Kepala Dusun IV",
      name: "Muhamad Masrur",
      nip: "1234567890",
      telp: "0812345678",
      image: "/perangkatdesa2-img.jpg",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-start mt-16 w-full px-8 md:px-20">
        <div className="flex flex-row justify-center items-start max-w-[1080px] w-full my-16 gap-16">
          {/* SIDEBAR BEGIN */}
          <div className="hidden lg:flex flex-col min-w-fit gap-3 sticky top-24">
            <a
              onClick={(event) => handleClick(event, "struktur")}
              className="group flex flex-row gap-4"
            >
              <div
                className={` ${
                  activeSection === "struktur"
                    ? "border border-l border-c-gold2"
                    : "border border-l group-hover:border-c-gold2"
                } `}
              ></div>
              <p className=" text-gray-800">Struktur Pemerintahan</p>
            </a>
            {content.map((item, index) => {
              return (
                <a
                  key={index}
                  href={`#${item.id}`}
                  onClick={(event) => handleClick(event, item.id)}
                  className="group flex flex-row gap-4"
                >
                  <div
                    className={` ${
                      activeSection === `${item.id}`
                        ? "border border-l border-c-gold2"
                        : "border border-l group-hover:border-c-gold2"
                    } `}
                  ></div>
                  <p className=" text-gray-800">{item.title}</p>
                </a>
              );
            })}
          </div>
          {/* SIDEBAR END */}

          <div className="flex flex-col">
            <section
              id="struktur"
              className="flex flex-col w-full gap-4 section"
            >
              <h3>Struktur Pemerintahan</h3>
              <div className="flex flex-col justify-center items-center rounded-md h-auto w-full mb-16 overflow-hidden">
                <Image
                  src="/strukturbanu.svg"
                  alt="struktur pemerintahan"
                  width={100}
                  height={100}
                  className="relative w-full h-auto object-cover"
                ></Image>
              </div>
            </section>

            <hr></hr>

            <h3 className="my-12">Profil Perangkat Desa</h3>
            <div className="flex flex-col gap-8">
              {content.map((item, index) => {
                return (
                  <section key={index} id={item.id} className="section">
                    <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[200px] border border-gray-200 rounded-lg shadow-md overflow-hidden">
                      <div className="overflow-hidden md:w-1/2 h-full">
                        <Image
                          src={item.image}
                          alt="profil perangkat desa"
                          width={500}
                          height={500}
                          className="w-full h-full object-cover"
                        ></Image>
                      </div>

                      <div className="flex flex-col w-full p-10 gap-2">
                        <h5>{item.title}</h5>
                        <p className="text-c-green font-extrabold text-3xl">
                          {item.name}
                        </p>
                        {/* <h5 className="text-c-darkgreen">NIP: {item.nip}</h5> */}
                        <a className="flex justify-center items-center w-min bg-c-darkgreen text-white rounded-full px-10 py-1 mt-4 hover:bg-c-green hover:-translate-y-1 hover:shadow-lg shadow-md duration-200">
                          Hubungi
                        </a>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
      <Footer></Footer>
    </>
  );
}

export default Pemerintahan;
