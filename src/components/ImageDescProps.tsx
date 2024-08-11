import React from "react";
import Image from "next/image";
import { Italianno } from "next/font/google";

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
interface ImageDescPropsData {
  src: string;
  title?: string;
  description?: string;
  width: number;
  height: number;
  inverted?: boolean;
  secondSrc?: string;
  onlyPhoto?: boolean;
}

export default function ImageDescProps({
  src,
  title,
  description,
  width,
  height,
  inverted = false,
  secondSrc,
  onlyPhoto = false,
}: ImageDescPropsData) {
  return (
    <section
      className={`flex ${
        inverted
          ? "flex-row-reverse max-sm:flex-col-reverse"
          : "flex-row max-sm:flex-col"
      } max-md:px-[5%] max-2xl:px-[10%] 2xl:px-[20%]  max-sm:text-base sm:text-sm md:text-sm lg:text-xl xl:text-2xl bg-beige-color`}
    >
      <div className="sm:w-1/2">
        <Image
          src={src}
          width={width}
          height={height}
          alt="Zdjęcie"
          loading="lazy"
        />
      </div>

      <div
        className={` ${
          onlyPhoto ? "hidden" : "flex"
        } sm:w-1/2 flex-col h-px[${`height`}] max-sm:text-center  justify-center max-sm:items-center p-4`}
      >
        <h3
          className={`font-title-font max-sm:text-lg sm:text-lg md:text-xl lg:text-2xl`}
        >
          {title}
        </h3>
        <br />
        <p className={`${description ? "" : "hidden"}`}>{description}</p>
      </div>
      <div className={` ${!onlyPhoto ? "hidden" : "sm:w-1/2"}`}>
        <Image
          src={secondSrc || ""}
          width={width}
          height={height}
          alt="Zdjęcie"
          loading="lazy"
        />
      </div>
    </section>
  );
}
