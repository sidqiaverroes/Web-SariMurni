import React from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import ArtikelCard from "@/components/Artikel/artikelCard";

const ArtikelItem = ({ imageSrc, title }) => {
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

function artikel() {
  const artikels = [
    {
      id: "artikel1",
      title: "Judul artikel sebagai contoh aja",
      category: "Kesehatan",
      body: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. ",
      author: "Admin",
      date: "20 Agustus 2023",
      image: "/galeri1.png",
    },
    {
      id: "artikel2",
      title: "Judul artikel sebagai contoh aja biar agak panjang",
      category: "Kesehatan",
      body: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. ",
      author: "Admin",
      date: "19 Agustus 2023",
      image: "/galeri2.png",
    },
    {
      id: "artikel3",
      title: "Judul artikel sebagai contoh aja biar agak panjang",
      category: "Kesehatan",
      body: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. ",
      author: "Admin",
      date: "21 Agustus 2023",
      image: "/galeri3.png",
    },
    {
      id: "artikel5",
      title: "Judul artikel sebagai contoh aja biar agak panjang",
      category: "Kesehatan",
      body: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. ",
      author: "Admin",
      date: "17 Agustus 2023",
      image: "/galeri4.png",
    },
    {
      id: "artikel4",
      title: "Judul artikel sebagai contoh aja biar agak panjang",
      category: "Kesehatan",
      body: "Lorem ipsum dolor sit amet consectetur. Cras rutrum a molestie purus vitae feugiat. ",
      author: "Admin",
      date: "18 Agustus 2023",
      image: "/galeri5.png",
    },
  ];

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
