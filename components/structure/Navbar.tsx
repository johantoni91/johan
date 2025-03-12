"use client";

import Link from "next/link";
import DarkModeToggle from "../DarkMode";
import { FaAlignRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", toggleScroll);
    return () => window.removeEventListener("scroll", toggleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Hide dropdown on small screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`relative sticky z-40 dark:bg-black/40 top-0 backdrop-blur-lg mx-auto lg:w-1/2 flex justify-between items-center p-4 ${scroll ? "w-full lg:w-full shadow-lg dark:shadow-white backdrop-blur-lg":""}`}>
      <h1 className="font-semibold text-xl">Johan Toni Wijaya</h1>
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FaAlignRight />
      </button>
      <div
        className={`${
          !isOpen
            ? "sm:flex sm:justify-center sm:items-center sm:space-x-4 hidden"
            : "flex flex-col items-start absolute w-screen top-[3.73rem] right-0 z-40 rounded-bl-xl rounded-br-xl bg-white backdrop-blur-lg shadow-xl dark:bg-black dark:shadow-lg dark:shadow-white"
        }`}>
          <Link className="w-full hover:border-b-2 hover:border-[#03bcf4] hover:rounded-bl-xl hover:rounded-br-xl p-3" href="#about">About</Link>
          <Link className="w-full hover:border-b-2 hover:border-[#03bcf4] hover:rounded-bl-xl hover:rounded-br-xl p-3" href="#experience">Experiences</Link>
          <Link className="w-full hover:border-b-2 hover:border-[#03bcf4] hover:rounded-bl-xl hover:rounded-br-xl p-3" href="#skills">Skills</Link>
        <Link className="w-full hover:border-b-2 hover:border-[#03bcf4] hover:rounded-bl-xl hover:rounded-br-xl p-3" href="#contact">Contact</Link>
        <div className="w-full hover:border-b-2 hover:border-[#03bcf4] hover:rounded-bl-xl hover:rounded-br-xl p-3">
          <DarkModeToggle/>
        </div>
      </div>
    </nav>
  );
}
