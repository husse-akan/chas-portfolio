"use client";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="py-4 md:py-8 px-4 md:px-0">

<div className="flex items-center">
    <div className="logo flex-none w-14">
      <Link href="/">
        
      </Link>
    </div>
    <div className="desknav grow hidden md:inline-block">
      <ul className="flex justify-center gap-5">
        <li>
          <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-500 font-bold">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-bold">About</Link>
        </li>
        <li>
          <Link href="/projects" className="text-gray-800 dark:text-white hover:text-blue-500 font-bold">Projects</Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500 font-bold">Contact</Link>
        </li>
      </ul>
    </div>
    <div className="swich flex grow md:grow-0 justify-end gap-2 md:gap-1">
      <div className="textchangeflex-none w-24 md:flex justify-center">
        <ThemeSwitcher />
      </div>
    </div>
    <div className="hamburger md:hidden flex w-10 justify-end" onClick={toggleMobileNav}>
      {isMobileNavOpen ? (
        <FaTimes size="1.5em" />
        ) : (
        <FaBars size="1.5em" />
      )}
    </div>
</div>
{/* Mobile menu start */}
<div 
className={`${
  isMobileNavOpen
      ? "flex flex-col items-end mt-4 test md:hidden"
      : "hidden md:hidden"
  } justify-end`}
>
  <ul className="md:flex gap-4">
      <li>
        <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-500 font-bold">Home</Link>
      </li>
      <li>
        <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-500 font-bold">About</Link>
      </li>
      <li>
        <Link href="/projects" className="text-gray-800 dark:text-white hover:text-blue-500 font-bold">Projects</Link>
      </li>
      <li>
        <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-500 font-bold">Contact</Link>
      </li>
  </ul>
</div>

    </header>
  );
}

export default Header;
