import React from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ArtikelCard from "@/components/Artikel/artikelCard";
import artikelData from "@/data/artikelData.json";

function artikel() {
  const artikels = artikelData;
  // Function to replace Indonesian month names with English
  function replaceIndonesianMonth(dateString) {
    const monthMap = {
      Januari: "January",
      Februari: "February",
      Maret: "March",
      April: "April",
      Mei: "May",
      Juni: "June",
      Juli: "July",
      Agustus: "August",
      September: "September",
      Oktober: "October",
      November: "November",
      Desember: "December",
    };

    return dateString.replace(/(\w+)/g, (match) => monthMap[match] || match);
  }

  // Custom comparison function to compare "Date" attributes
  function compareDates(a, b) {
    const dateA = new Date(replaceIndonesianMonth(a.date));
    const dateB = new Date(replaceIndonesianMonth(b.date));
    return dateB - dateA;
  }

  // Sort the items array based on the "date" attribute
  artikels.sort(compareDates);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center w-full h-full max-w-[1080px] py-24">
          <div className="flex flex-col w-full gap-8 h-full">
            <span className="flex flex-col items-center lg:gap-2 gap-4 pt-8">
              <h3 className="text-xl text-c-darkgold">Artikel</h3>
              <h2 className="-mt-2 text-center leading-none">
                Desa Sari Murni
              </h2>
              <p className="text-center">
                Telusuri berbagai artikel tentang Desa Sari Murni di laman ini.
              </p>
            </span>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              {artikels.map((item, index) => {
                return <ArtikelCard key={index} item={item}></ArtikelCard>;
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

export default artikel;
