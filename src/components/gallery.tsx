import React from "react";
import Image from "next/image";
import cos from "/public/img/cos.jpeg";
import deska from "/public/img/deska.jpeg";
import kapary from "/public/img/kapary.jpeg";
import mortadela from "/public/img/mortadela.jpeg";
import oliwa from "/public/img/oliwa.jpeg";
import oliwki from "/public/img/oliwki.jpeg";
import pasta from "/public/img/pasta.jpeg";
import ser from "/public/img/ser.jpeg";

interface GalleryData {
  width: number;
  height: number;
}

export default function Gallery({ width, height }: GalleryData) {
  return (
    <section
      className={`flex flex-row max-sm:flex-col max-md:px-[5%] max-2xl:px-[10%] 2xl:px-[20%] max-sm:text-base sm:text-sm md:text-sm lg:text-xl xl:text-2xl bg-beige-color`}
    >
      <div className="sm:w-1/2 grid grid-cols-2 grid-rows-2">
        <div>
          <Image
            src={cos}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={deska}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={kapary}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={mortadela}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="sm:w-1/2 grid grid-cols-2 grid-rows-2">
        <div>
          <Image
            src={oliwa}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={oliwki}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={pasta}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={ser}
            width={width}
            height={height}
            alt="Zdjęcie"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
