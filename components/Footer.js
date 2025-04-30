import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <>
      <footer className="py-8 text-center mt-14">
        <div className="flex justify-center">
          <Link href="/">
            {/* <img className="logo" src={logo} width="60px" alt="Ozay Logo" /> */}
            <Image
               
              className="hidden dark:block"
              height={17} // Desired size with correct aspect ratio
              width={30} // Desired size with correct aspect ratio
              alt="Husse Logo"
            />
            
          </Link>
        </div>
        <div className="flex gap-2 justify-center font-normal text-sm my-2 ">
          <Link
            href="/"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-slate-500 hover:text-black hover:dark:text-white"
          >
            Contact
          </Link>
        </div>
        <div className="text-slate-500 text-xs my-2 font-light">
          <p>Chas React Portfollio</p> <p>2024 - Huseyin- Chas Academy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
