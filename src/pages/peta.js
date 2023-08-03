import React from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

function Peta() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center w-full h-full max-w-[1080px] py-24">
          <div className="flex flex-col w-full gap-8 h-full">
            <span className="flex flex-col items-center lg:gap-2 gap-4 pt-8">
              <h3 className="text-xl text-c-darkgold">Story Maps</h3>
              <h2 className="-mt-2 text-center leading-none">Desa Banuroja</h2>
            </span>
            <div className="flex justify-center items-center w-full h-full">
              <iframe
                src="https://storymaps.arcgis.com/stories/598109ebcd414c19b9beaa7912c5146c"
                width="100%"
                height="800px"
                frameborder="0"
                allowFullScreen
                allow="geolocation"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <NavBar></NavBar>
      <Footer></Footer>
    </>
  );
}

export default Peta;
