import React from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

function Profil() {
  return (
    <>
      <div className="flex justify-center items-start mt-16 w-full md:px-20 px-8">
        <div className="flex flex-col justify-center items-start w-full max-w-[1080px]">
          <section
            data-aos="fade-up"
            className="flex flex-col md:flex-row-reverse justify-start items-center py-24 gap-16"
          >
            <div className="flex flex-col gap-4 w-full">
              <span className=" flex flex-col">
                <h3 className="text-xl text-c-darkgold">Tentang</h3>
                <h2 className=" text-c-darkgreen">Desa Sari Murni</h2>
              </span>
              <p>
                Desa Sari Murni adalah desa yang terletak di Kecamatan
                Randangan, Kabupaten Pohuwato, Provinsi Gorontalo. Desa ini
                memiliki luas wilayah sekitar 10,5 kilometer persegi dan
                berpenduduk sekitar 2.000 jiwa. Desa Sari Murni dijuluki sebagai
                &quot;Desa Pancasila&quot; karena masyarakatnya yang heterogen
                dan hidup rukun berdampingan, walaupun mereka berasal dari
                berbagai suku dan agama yang berbeda. Suku-suku yang ada di Desa
                Sari Murni adalah Bali, Nusa Tenggara, Gorontalo, Jawa, dan
                lainnya. Agama yang ada di Desa Sari Murni adalah Islam,
                Kristen, dan Hindu. Masyarakat Desa Sari Murni sangat toleransi
                satu sama lain, dan mereka selalu menjaga kerukunan antar umat
                beragama. <br></br>
                <br></br>
                Mata pencaharian utama penduduk Desa Sari Murni adalah petani
                jagung. Selain jagung, penduduk Desa Sari Murni juga menanam
                buah naga, kelapa, dan tanaman lainnya. Masyarakat Desa Sari
                Murni juga beternak sapi, kambing, ayam, dan babi. Desa Sari
                Murni adalah desa yang sangat indah dan nyaman untuk ditinggali.
                Masyarakatnya yang ramah dan toleransi membuat Desa Sari Murni
                menjadi desa yang sangat layak dikunjungi oleh wisatawan dari
                seluruh Indonesia.
              </p>
            </div>
            <div className="flex overflow-hidden rounded-full w-full h-auto">
              <Image
                src="/desa2.png"
                alt="img"
                width={500}
                height={500}
                className="w-full obje"
              ></Image>
            </div>
          </section>

          <section
            data-aos="fade-up"
            className="flex flex-col justify-start items-center pt-24 pb-48 gap-12"
          >
            <h3>
              <span className=" text-c-darkgold">Visi dan</span> Misi Desa
            </h3>
            <div className="flex flex-col lg:flex-row h-full lg:h-[350px] justify-start items-start gap-8 ">
              <div className="flex flex-col w-full lg:w-[350px] justify-start gap-4 h-full bg-white from-white via-white to-c-lightgold border border-c-gold2 rounded-xl shadow-lg p-8 lg:p-16">
                <span className="bg-c-darkgold max-w-min font-bold text-white rounded-full px-8 py-1">
                  Visi
                </span>
                <p>
                  &quot;Desa yang Mandiri dan Sejahtera dalam Kehidupan
                  Masyarakat yang Sehat, Rukun, dan Damai serta Religius&quot;
                </p>
              </div>

              <div className="flex flex-col justify-start h-full gap-4 bg-white from-white via-white to-c-lightgreen border border-c-lightgreen rounded-xl shadow-lg p-8 lg:p-16">
                <span className="bg-c-green max-w-min font-bold text-white rounded-full px-8 py-1">
                  Misi
                </span>
                <p>
                  1. Mewujudkan Pemerintahan Desa yang Mandiri, Amanah, dan
                  Akuntabel. <br /> 2. Terwujudnya Masyarakat yang Mandiri
                  dengan Tingkat Ekonomi yang Kuat. <br /> 3. Meningkatkan
                  Kualitas Kesehatan Masyarakat.
                  <br /> 4. Meningkatkan dan Menjamin Pendidikan Masyarakat.
                  <br />
                  5. Mewujudkan Kehidupan Masyarakat yang Aman dan Saling
                  Menghargai di Tengah Keberagaman Etnis dan Agama.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center items-start  w-full bg-gradient-to-b from-c-green to-c-darkgreen md:px-20 px-8">
        <div className="flex flex-col justify-center items-start w-full max-w-[1080px] ">
          <section
            data-aos="fade-up"
            className="flex flex-row w-full justify-center items-center py-32"
          >
            <div className="flex flex-col justify-center items-center gap-4 ">
              <span className=" flex flex-col items-center text-center">
                <h3 className="text-xl text-c-gold2">Tentang</h3>
                <h2 className=" text-white">Logo Desa Sari Murni</h2>
              </span>
              <Image
                src="/logo-banu.png"
                alt="logo Sari Murni"
                width={400}
                height={400}
              ></Image>
              <p className="text-white text-center">
                Logo desa Sari Murni terinspirasi dari burung garuda pancasila
                yang kemudian diadaptasi untuk mencerminkan Desa Sari Murni
                sebagai desa pancasila. Sayap dan ekor pada logo membentuk
                huruf-huruf yang bertuliskan &quot;Sari Murni&quot;. Bagian logo
                terbagi menjadi 3 segmen yang merepresentasikan 3 agama di Sari
                Murni, yaitu Islam, Kristen, dan Hindu.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center items-start  w-full bg-white md:px-20 px-8">
        <div className="flex flex-col justify-center items-start w-full max-w-[1080px] ">
          <section
            data-aos="fade-up"
            className="flex flex-col md:flex-row justify-start items-center py-48 gap-16"
          >
            <div className="flex flex-col gap-4 w-full">
              <span className=" flex flex-col">
                <h3 className="text-xl text-c-darkgold">Sejarah</h3>
                <h2 className=" text-c-darkgreen">Desa Sari Murni</h2>
              </span>
              <p>
                Desa Sari Murni didirikan pada tahun 1950 oleh oleh sekelompok
                orang dari berbagai suku dan agama yang berasal dari Pulau Jawa,
                Pulau Bali, dan Pulau Lombok. Mereka datang ke Desa Sari Murni
                untuk mencari penghidupan yang lebih baik. <br />
                <br />
                Awalnya, Desa Sari Murni hanya sebuah desa kecil yang sangat
                sederhana. Namun, seiring berjalannya waktu, Desa Sari Murni
                berkembang menjadi desa yang lebih besar dan lebih maju. Hal ini
                disebabkan oleh masyarakat Desa Sari Murni yang sangat rajin dan
                gigih bekerja. Masyarakat Desa Sari Murni juga sangat toleransi
                satu sama lain. Mereka selalu menjaga kerukunan antar umat
                beragama, walaupun mereka berasal dari berbagai suku dan agama
                yang berbeda. Hal ini membuat Desa Sari Murni menjadi desa yang
                sangat indah dan nyaman untuk ditinggali.
              </p>
            </div>
            <div className="flex overflow-hidden rounded-full w-full h-auto">
              <Image
                src="/galeri3.png"
                alt="img"
                width={500}
                height={500}
                className="w-full"
              ></Image>
            </div>
          </section>
        </div>
      </div>

      <NavBar></NavBar>
      <Footer></Footer>
    </>
  );
}

export default Profil;
