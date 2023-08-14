"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const route = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=" h-[calc(100vh-56px)] flex flex-col justify-center items-center">
      <Image
        src="/not-found-img.jpg"
        alt="not-found"
        height={300}
        width={280}
      />
      <h3 className="mt-4 font-bold text-xl">Sorry Page Not found</h3>
      <div>
        <button
          onClick={() => {
            route.replace(pathname);
          }}
          className="mt-3 mr-3 text-sm font-semibold border rounded-md px-2 py-1 text-white bg-blue-800 active:bg-blue-600"
        >
          Retry
        </button>
        <button
          onClick={() => {
            route.replace("/");
          }}
          className="mt-3 ml-3 text-sm font-semibold border rounded-md px-2 py-1 text-white bg-blue-800 active:bg-blue-600"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
