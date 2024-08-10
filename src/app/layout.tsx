import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.css";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import NavBar from "../components/navBar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Crudo Gusto",
  description:
    'CrudoGusto - włoskie jedzenie, delikatesy i wyjątkowy catering śródziemnomorski · "Po dobrym obiedzie nie ma się pretensji do nikogo - nawet do własnej rodziny"',
};
console.log(faBars);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
