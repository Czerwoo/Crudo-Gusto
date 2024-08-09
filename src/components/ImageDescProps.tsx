import React from "react";
import Image from "next/image";

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
        inverted ? "flex-row-reverse" : "flex-row"
      } px-[20%] bg-beige-color`}
    >
      <div className="w-1/2">
        <Image src={src} width={width} height={height} alt="Zdjęcie" />
      </div>

      <div
        className={` ${
          onlyPhoto ? "hidden" : "flex"
        } w-1/2 flex-col h-px[${`height`}] justify-start align-middle items-center p-4`}
      >
        <h3 className="">{title}</h3>
        <br />
        <p className={`${description ? "" : "hidden"}`}>{description}</p>
      </div>
      <div className={` ${!onlyPhoto ? "hidden" : "w-1/2"}`}>
        <Image
          src={secondSrc || ""}
          width={width}
          height={height}
          alt="Zdjęcie"
        />
      </div>
    </section>
  );
}
