import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full  mt-0 h-30 bg-white-color">
      <div className="w-full my-5 max-md:px-[5%] max-2xl:px-[10%] 2xl:px-[20%] flex justify-end items-center gap-x-4 h-10 max-sm:justify-center">
        <Link href="https://www.facebook.com/crudogusto">
          <FaFacebookF size={35} />
        </Link>
        <Link href="https://www.instagram.com/crudogusto/">
          <FaInstagram size={40} />
        </Link>
      </div>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="h-20 my-5 max-md:px-[5%] max-2xl:px-[10%] 2xl:px-[20%] flex justify-between max-sm:flex-col max-sm:justify-center">
        <p className="max-sm:text-center">© CrudoGusto 2024</p>
        <nav className="w-2/3 h-full flex max-sm:justify-center max-sm:w-full max-sm:text-center  justify-end">
          <div className="px-4 h-full ">
            <ul className="flex gap-x-6 max-sm:justify-center max-sm:items-center">
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
  );
}
