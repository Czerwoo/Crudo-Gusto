import React from "react";
import { Dancing_Script } from "next/font/google";

interface HeaderData {
  content: string;
}
const Dancing = Dancing_Script({ subsets: ["latin"] });
export default function Header({ content }: HeaderData) {
  return (
    <section className="max-sm:px-[5%] sm:px-[10%] md:px-[20%] py-5 bg-white-color flex justify-center text-center">
      <h1
        className={`${Dancing.className} max-sm:text-xl sm:text-xl md:text-2xl lg:text-3xl`}
      >
        {content}
      </h1>
    </section>
  );
}
