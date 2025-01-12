import React from "react";
import { Work } from "@/../types/works/type";
import Image from "next/image";

const WorkCard = ({ id, title, description, image, url }: Work) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center p-5 bg-gray-400 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-video relative"
      >
        <Image src={image} alt={title} fill className="object-cover rounded-lg" />
      </a>
    </div>
  );
};

export default WorkCard;
