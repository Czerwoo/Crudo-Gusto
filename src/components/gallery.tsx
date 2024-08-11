import React from "react";
import Image from "next/image";

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
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391992/pasta_Easy-Resize.com_d24t9z.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391992/deska_Easy-Resize.com_bru8ek.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391992/oliwa_Easy-Resize.com_gj3znx.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391990/kapary_Easy-Resize.com_vsm5zn.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="sm:w-1/2 grid grid-cols-2 grid-rows-2">
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391990/ser_Easy-Resize.com_s2wcgv.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391990/oliwki_Easy-Resize.com_y5cast.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391990/cos_Easy-Resize.com_qmqdmj.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dku1cgzdg/image/upload/v1723391990/mortadela_Easy-Resize.com_dmoodl.jpg"
            }
            width={width}
            height={height}
            alt="Zdjęcie"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
