import React from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Tabel from "@/components/TabelBumdes";

function Bumdes() {
  return (
    <>
      <div className="relative w-full overflow-hidden h-[300px]">
        <Image
          src="/bumdes-img.jpg"
          alt="bumdesbackground"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full px-8 md:px-20">
        <section
          data-aos="fade-up"
          className="flex flex-col justify-center items-center w-full max-w-[1080px] gap-24 pb-24"
        >
          <span className="relative justify-center items-center bg-white p-10 rounded-lg shadow-lg border border-gray-300  -mt-36">
            <Image
              src="/logo-umam.png"
              alt="logo umam"
              width={150}
              height={150}
              className="w-auto object-cover"
            ></Image>
          </span>
          <span className="flex flex-col justify-center items-center gap-4 w-full">
            <h2 className="">
              <span className="text-c-green">Profil</span> BUMDes
            </h2>
            <p className="text-center">
              Badan Usaha Milik Desa (BUMDes) Satya Muda Creative adalah lembaga
              usaha desa yang dikelola oleh masyarakat dan pemerintahan desa
              dalam upaya memperkuat perekonomian desa dan dibentuk berdasarkan
              kebutuhan dan potensi Desa Banuroja. Disahkan pada 16 April 2020,
              BUMDes Satya Muda Creative Banuroja dimaksudkan sebagai upaya
              menampung seluruh kegiatan di bidang ekonomi dan/atau pelayanan
              umum yang dikelola oleh Desa banuroja dan/atau kerjasama antardesa
              yang bersifat menyelenggarakan kemanfaatan umum dan mengenbangkan
              perekonomian desa yang menguntungkan. Selain itu, BUMDes Satya
              Muda Creative Banuroja didirikan dengan tujuan untuk
              mengoptimalkan pemanfaatan potensi dan aset desa dalam rangka
              meningkatkan perekonomian dan kesejahteraan masyarakat Desa
              Banuroja.
            </p>
          </span>
        </section>

        <section
          data-aos="fade-up"
          className="flex flex-col justify-start items-center pt-24 pb-24 gap-12 max-w-[1080px]"
        >
          <h3>
            <span className=" text-c-darkgold">Visi dan</span> Misi BUMDes
          </h3>
          <div className="flex flex-col lg:flex-row h-full lg:h-[375px] justify-start items-start gap-8 ">
            <div className="flex flex-col w-full justify-center gap-4 h-full bg-white from-white via-white to-c-lightgold border border-c-gold2 rounded-xl shadow-lg p-8 lg:p-12">
              <span className="bg-c-darkgold max-w-min font-bold text-white rounded-full px-8 py-1">
                Visi
              </span>
              <p>
                Menjadi pendorong tumbuhnya usaha ekonomi dan kesejahteraan
                masyarakat Desa Banuroja yang berkelanjutan dengan menjadikan
                Desa Banuroja sebagai sentra perdagangan jasa, pertanian dan
                industri kerakyatan yang kuat menuju masyarakat sejahtera,
                cerdas, sehat dan terampil melalui pengembangan usaha ekonomi,
                peningkatan kapasitas dan kompetensi sumber daya dan
                kelembagaan.
              </p>
            </div>

            <div className="flex flex-col justify-center w-full h-full gap-4 bg-white from-white via-white to-c-lightgreen border border-c-lightgreen rounded-xl shadow-lg p-8 lg:p-12">
              <span className="bg-c-green max-w-min font-bold text-white rounded-full px-8 py-1">
                Misi
              </span>
              <p>
                1. Mengoptimalkan pemanfaatan potensi sumber daya desa. <br />
                2. Membangkitkan kegiatan ekonomi kecil dan menengah.
                <br /> 3. Meningkatkan partisipasi masyarakat dalam pembangunan
                desa. <br /> 4. Mendorong inisiatif dan inovasi produk lokal.
                <br /> 5. Mengembangkan layanan sosial dan infrastruktur yang
                mendukung perekonomian desa.
              </p>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="flex flex-col justify-center items-center w-full max-w-[1080px] py-24 gap-8"
        >
          <h3 className="lg:w-1/2 text-center">
            <span className="text-c-green">Penanggung Jawab Manajemen </span>
            BUMDes Satya Muda Creative Banuroja
          </h3>
          <div className="flex justify-start lg:justify-center items-center w-full overflow-x-auto">
            <Tabel />
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="flex flex-col justify-center items-center w-full max-w-[1080px] py-24 gap-8"
        >
          <h3 className="lg:w-1/2 text-center">
            <span className="text-c-green">Struktur Manajemen BUMDes </span>
            Satya Muda Creative Banuroja
          </h3>
          <div className="flex flex-col justify-center items-center rounded-md h-auto w-full mb-16 overflow-hidden">
            <Image
              src="/strukturbumdes.svg"
              alt="struktur bumdes"
              width={100}
              height={100}
              className="relative w-full h-auto object-cover"
            ></Image>
          </div>
        </section>
      </div>

      <NavBar></NavBar>
      <Footer></Footer>
    </>
  );
}

export default Bumdes;
