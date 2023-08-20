import React from "react";
import artikelData from "@/data/artikelData.json";

function ArtikelDetailsPage({ object }) {
  return (
    <div>
      <h1>Artikel Details</h1>
      <p>Title: {object.title}</p>
      <p>Body: {object.body}</p>
      {/* Other object details */}
    </div>
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
