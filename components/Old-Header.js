"use client";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import logoWhite from "@/public/images/oo-logo-white.svg";
import logo from "@/public/images/oo-logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="py-4 md:py-8 px-4 md:px-0">
      <div className="flex">
        <div className="w-1/4 md:w-1/6">
          <Link href="/">
            <Image
              src={logoWhite}
              className="hidden dark:block"
              height={33}
              width={60}
              alt="Ozay Logo"
            />
            <Image
              src={logo} // Route of the image file
              className="block dark:hidden"
              height={33}
              width={60}
              alt="Ozay Logo"
            />
          </Link>
        </div>

        <div className="w-3/4 md:w-5/6 lg:flex lg:flex-row justify-end md:flex md:flex-col">
          {/* Mobil navigasyon butonu */}
          <div
            className="md:hidden cursor-pointer text-gray-800 hover:text-blue-500 dark:text-white flex justify-end "
            onClick={toggleMobileNav}
          >
            {isMobileNavOpen ? (
              <FaTimes size="1.5em" />
            ) : (
              <FaBars size="1.5em" />
            )}
          </div>

          {/* Normal menü */}
          <nav
            className={`${
              isMobileNavOpen
                ? "flex flex-col items-end mt-4"
                : "hidden md:flex"
            } md:flex md:items-center justify-end`}
          >
            <ul className="md:flex gap-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-800 dark:text-white hover:text-blue-500 font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-800 dark:text-white hover:text-blue-500 font-bold"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-800 dark:text-white hover:text-blue-500 font-bold"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <a
                  href="https://github.com/ozayo/React-Components-Library"
                  target="_blank"
                  className="text-gray-800 hover:text-blue-500 flex items-center"
                >
                  <FaGithub size="1.5em" className="mr-1" />
                </a>
              </li> */}
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
