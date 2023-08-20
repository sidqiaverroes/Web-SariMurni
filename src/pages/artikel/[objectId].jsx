import React from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import artikelData from "@/data/artikelData.json";

function ArtikelDetailsPage({ object }) {
  // console.log(object);

  // Calculate the midpoint to split the array into halves
  const midpoint = Math.ceil(object.body.length / 2);

  // Split the array into two halves
  const firstHalfBody = object.body.slice(0, midpoint);
  const secondHalfBody = object.body.slice(midpoint);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="flex flex-col justify-center items-center w-full h-full max-w-[800px] py-24 gap-4">
          <span className="w-full h-full">
            <Image
              src={object.image[0]}
              width={500}
              height={500}
              alt="artikel-img"
              className="w-full h-full"
            />
          </span>
          <span className="flex flex-row w-full justify-start font-bold text-gray-700">
            <p>
              Penulis: {object.author} <span class=" font-bold text-lg">•</span>{" "}
              {object.date}
            </p>
          </span>
          <h3 className="flex w-full justify-start">{object.title}</h3>
          {firstHalfBody.map((item, index) => {
            return (
              <p
                key={index}
                className=" w-full justify-start text-justify"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}

          <Image
            src={object.image[1]}
            width={500}
            height={500}
            alt="artikel-img"
            className="w-full h-full"
          />

          {secondHalfBody.map((item, index) => {
            return (
              <p
                key={index}
                className=" w-full justify-start text-justify"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </div>
      </div>
      <NavBar />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // Fetch the list of artikel names from your data source
  const paths = artikelData.map((item) => ({
    params: { objectId: item.id },
  }));

  return {
    paths,
    fallback: false, // or 'blocking' if you want to generate new pages on-demand
  };
}

export async function getStaticProps({ params }) {
  // Fetch object details based on the parameter (objectName)
  const objectId = params.objectId;
  const object = artikelData.find((item) => item.id === objectId);

  return {
    props: {
      object,
    },
  };
}

export default ArtikelDetailsPage;
