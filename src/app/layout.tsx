import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import "./layout.css";
import logo from "/public/img/logo.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Crudo Gusto",
  description: "Delikatesy włoskie w Łodzi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="w-full h-30 flex items-center text-main-font-color font-main-font bg-beige-color px-[20%]">
          <div className="float-left h-full">
            <Link href="/">
              <Image src={logo} width={240} height={120} alt="Logo" />
            </Link>
          </div>
          <nav className="w-full h-full flex justify-end">
            <div className="px-4 h-full ">
              <ul className="flex gap-x-6 active:underline">
                <li>
                  <Link href="/">
                    <p>Nasze delikatesy</p>
                  </Link>
                </li>
                <li>
                  <Link href="/italian">
                    <p>Włoski stół</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p>Kontakt</p>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
        {children}
        <footer className="w-full  mt-0 h-30 bg-white-color">
          <div className="w-full my-5 px-[20%] flex justify-end gap-x-4 h-10">
            {/* <Link href="https://www.facebook.com/crudogusto"> */}
            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            {/* </Link> */}
            {/* <Link href="https://www.instagram.com/crudogusto/"> */}
            <FontAwesomeIcon icon={faInstagram} />
            {/* </Link> */}
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="h-20 my-5 px-[20%] flex justify-between">
            <p>© CrudoGusto 2023</p>
            <nav className="w-2/3 h-full flex justify-end">
              <div className="px-4 h-full ">
                <ul className="flex gap-x-6">
                  <li>
                    <Link href="/">
                      <p>Nasze delikatesy</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/italian">
                      <p>Włoski stół</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <p>Kontakt</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
