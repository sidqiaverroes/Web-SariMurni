import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function peta() {
  return (
    <section
      id="peta"
      className=" flex justify-center items-center w-full py-24 relative z-0"
    >
      <div className="flex flex-col max-w-[1080px] w-full gap-12">
        <div className="flex flex-col justify-center items-center w-full">
          <h2>Peta Wilayah</h2>
          {/* <h6>Lorem ipsum dolor sit amet consectetur.</h6> */}
        </div>
        <div className="flex felx-row bg-c-green w-full overflow-hidden rounded-xl shadow-md">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "450px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

          <div className="flex flex-col justify-center items-center text-white gap-4">
            <p className=" font-extrabold text-xl text-center">
              Peta Desa Banuroja
            </p>
            <a className="text-c-darkgreen rounded-full px-6 font-extrabold bg-gradient-to-r from-c-gold2 to-c-lightgold hover:-translate-y-1 hover:cursor-pointer duration-500">
              Jelajahi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default peta;
