"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href) => (pathname === href ? true : false);
  return (
    <nav className="w-100 flex justify-between items-center bg-zinc-300 backdrop-blur-2xl dark:bg-zinc-800 border-b border-gray-500  dark:border-gray-400 px-5 py-2">
      <Link href="/" className="flex items-center">
        <Image src="/funny-phone.jpg" alt="logo" width={35} height={35} />
        <h2 className=" bg-clip-text text-transparent bg-gradient-to-l from-orange-600 to-green-600 via-blue-500 dark:via-slate-50 dark:to-green-600 select-none ml-1 font-semibold">
          Phone Reviews
        </h2>
      </Link>
      <div>
        <Link
          className={`font-medium mr-3 ${isActive("/") && "text-blue-500"}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`font-medium mr-3 ${
            isActive("/reviews") && "text-blue-500"
          }`}
          href="/reviews"
        >
          Reviews
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
