import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../svg/Logo";

function Header() {
  return (
    <div className="flex justify-center px-[88px] py-[16px]  lg:justify-between items-center">
      <div className=" flex gap-3 ">
        <Logo />
        <h1 className="font-gotham text-white text-xl ">Shark Studio</h1>
      </div>
      <div className="hidden  lg:flex gap-14 font-gotham text-white z-50">
        <nav className=" sm:flex gap-10 items-center text-sm">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Services</a>
          </Link>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
        <Link href="/">
          <a className=" text-sm rounded-md px-[18px] py-[10px] bg-gradient-to-tr  from-gradient2-100 to-gradient1-100 hover:from-pink-500 hover:to-yellow-500">
            Contact us
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
