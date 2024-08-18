"use client";

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-5 h-[2px] bg-slate-800 rounded-sm transform transition-transform ease-in-out duration-500 ${
            isOpen ? "rotate-45 translate-y-[6.5px]" : ""
          }`}
        />
        <div
          className={`w-5 h-[2px] bg-slate-800 rounded-sm transform transition-opacity ease-in-out duration-500 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-5 h-[2px] bg-slate-800 rounded-sm transform transition-transform ease-in-out duration-500 ${
            isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
          }`}
        />
      </div>
      <div
        className={`fixed top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10 transition-all ease-in-out duration-500 ${
          isOpen ? "right-0" : "-right-[50rem]"
        }`}
      >
        <Link href="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/category?=all" onClick={() => setIsOpen(false)}>
          Categories
        </Link>
        <Link href="/" onClick={() => setIsOpen(false)}>
          Sign up
        </Link>
        <Link href="/" onClick={() => setIsOpen(false)}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
