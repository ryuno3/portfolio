import React, { Suspense } from "react";
import { Work } from "@/../types/works/type";
import Image from "next/image";

const WorkCard = ({ title, description, image, url }: Work) => {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-800/30 p-5 rounded-lg shadow-lg">
      <h3 className="text-lg font-maru font-bold mb-2">{title || "開発中"}</h3>
      <p
        className="italic text-gray-2
      300 mb-4"
      >
        {description || "......"}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-video relative"
      >
        <Suspense fallback={<div>Loading Image...</div>}>
          <Image
            src={image || "/no_image.png"}
            alt={title}
            fill
            sizes="300px"
            priority
            className="object-cover rounded-lg"
          />
        </Suspense>
      </a>
    </div>
  );
};

export default WorkCard;
