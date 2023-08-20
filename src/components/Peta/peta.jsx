import "leaflet/dist/leaflet.css";
import React from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";

import banulineData from "../../../public/banuline.json";

function Peta() {
  // const polygonCoordinates = Banuline.features[0].geometry.coordinates;

  const extractCoordinates = (geojsonData) => {
    return geojsonData.features.map((feature) => {
      return feature.geometry.coordinates.map((coordinate) => [
        coordinate[1],
        coordinate[0],
      ]);
    });
  };

  const polygonCoordinates = extractCoordinates(banulineData);
  // console.log(banulineData);
  // console.log(polygonCoordinates);

  return (
    <section
      id="peta"
      className=" flex justify-center items-center w-full py-24 relative z-0 md:px-20 px-8"
      data-aos="fade-up"
    >
      <div className="flex flex-col max-w-[1080px] w-full gap-12">
        <div className="flex flex-col justify-center items-center w-full text-center">
          <h2>Peta Wilayah</h2>
          {/* <h6>Lorem ipsum dolor sit amet consectetur.</h6> */}
        </div>
        <div className="flex flex-col lg:flex-row bg-c-green w-full overflow-hidden rounded-xl shadow-md">
          <MapContainer
            center={[0.5481339, 121.7880643]}
            zoom={14}
            style={{ height: "450px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[0.5481339, 121.7880643, 18]}>
              <Popup>Kantor Desa Banuroja</Popup>
            </Marker>
            <Polygon
              pathOptions={{ color: "green" }}
              positions={polygonCoordinates}
            />
          </MapContainer>

          <div className="flex flex-col justify-center items-center text-white gap-2 lg:gap-4 py-4">
            <p className=" font-extrabold text-xl text-center">
              Peta Desa Sari Murni
            </p>
            <Link
              href="/peta"
              className="text-c-darkgreen rounded-full px-6 font-extrabold bg-gradient-to-r from-c-gold2 to-c-lightgold hover:-translate-y-1 hover:cursor-pointer duration-500"
            >
              Jelajahi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Peta;
