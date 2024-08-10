"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/img/logo.jpg";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-30 flex items-center text-xl text-main-font-color font-main-font bg-beige-color max-md:px-[5%] max-2xl:px-[10%] 2xl:px-[20%] ">
      <div className="float-left h-full">
        <Link href="/">
          <Image src={logo} width={240} height={120} alt="Logo" />
        </Link>
      </div>
      <nav className="w-full h-full flex items-center  justify-end">
        <button className="sm:hidden" onClick={toggleMenu}>
          <FaBars size={32} />
        </button>
        {/* Navigation Links */}
        <div
          className={`sm:hidden ${
            isOpen
              ? "w-full h-full relative flex items-center flex-col justify-center min-h-screen bg-gray-100 bg-white/90 p-8 rounded-lg shadow-lg z-10  "
              : "hidden"
          } space-x-4`}
        >
          <Link href="/">
            <p>Nasze delikatesy</p>
          </Link>
          <Link href="/italian">
            <p>Włoski stół</p>
          </Link>
          <Link href="/contact">
            <p>Kontakt</p>
          </Link>
        </div>
        <div className="px-4 h-full max-sm:hidden">
          <ul className="flex gap-x-6">
            <li>
              <Link className="hover:underline" href="/">
                <p>Nasze delikatesy</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/italian">
                <p>Włoski stół</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                <p>Kontakt</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-24 w-24 sm:hidden content-center"></div>
      </nav>
    </div>
  );
}
