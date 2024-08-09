import React from "react";

interface QuotationData {
  content: string;
  author?: string;
}

export default function Quotation({ content, author }: QuotationData) {
  return (
    <section className="px-[20%] py-5 bg-white-color flex justify-center">
      <q className="font-quotation-font">{content}</q>
      <p>{author}</p>
    </section>
  );
}
