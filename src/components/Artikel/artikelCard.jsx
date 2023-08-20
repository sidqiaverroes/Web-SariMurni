import React from "react";
import Image from "next/image";
import Link from "next/link";

function artikelCard(props) {
  const titleMaxLength = 50;
  const descMaxLength = 70;

  function truncateText(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  }

  return (
    <div className="group flex flex-col h-[500px] w-full rounded-lg shadow-md overflow-hidden">
      <Image
        src={props.item.image}
        width={500}
        height={500}
        alt="galeri-img"
        className="relative w-full h-full object-cover overflow-hidden group-hover:scale-110 duration-200 hover:cursor-pointer"
      ></Image>
      <div className="relative flex flex-col justify-between h-full gap-2 bg-white p-8">
        <span className="flex flex-row items-center text-c-gold">
          <p>{props.item.category}</p> &nbsp;{" "}
          <span class=" font-bold text-lg">•</span> &nbsp;{" "}
          <p>{props.item.date}</p>
        </span>
        <span className="flex flex-col gap-1 justify-start h-full">
          <p className="text-xl font-extrabold">
            {truncateText(props.item.title, titleMaxLength)}
          </p>
          <p className="text-base">
            {truncateText(props.item.body, descMaxLength)}
          </p>
        </span>
        <Link
          href={`/artikel/${props.item.id}`}
          className="w-min text-c-darkgreen rounded-full px-6 font-extrabold bg-gradient-to-r from-c-gold2 to-c-lightgold hover:-translate-y-1 hover:cursor-pointer duration-500"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
}

export default artikelCard;
