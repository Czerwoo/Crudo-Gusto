import React from "react";

interface HeaderData {
  content: string;
}

export default function Header({ content }: HeaderData) {
  return (
    <section className="max-sm:px-[5%] sm:px-[10%] md:px-[20%] py-5 bg-white-color flex justify-center text-center">
      <h1 className="font-quotation-font max-sm:text-base sm:text-lg md:text-xl lg:text-2xl">
        {content}
      </h1>
    </section>
  );
}
