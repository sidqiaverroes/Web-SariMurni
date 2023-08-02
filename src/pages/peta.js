import React from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

function Peta() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full max-w-[1080px] mt-16 py-16">
          <div className="flex flex-col w-full gap-8 pt-8 bg-white rounded-lg shadow-lg border border-c-lightgold">
            <span className="flex flex-col items-center ">
              <h4 className="text-c-darkgold">Story Maps</h4>
              <h2 className="-mt-2">Desa Banuroja</h2>
            </span>
            <div className="w-full">
              <iframe
                src="https://storymaps.arcgis.com/stories/598109ebcd414c19b9beaa7912c5146c"
                width="100%"
                height="800px"
                frameborder="0"
                allowfullscreen
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
