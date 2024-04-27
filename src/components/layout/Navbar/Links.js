"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function () {
  const pathname = usePathname();
  return (
    <div className="w-8/12 lg:flex items-center justify-center gap-x-[25px] text-white font-Barlow text-lg  leading-5 tracking-[1%] hidden ">
      <div className="">
        <Link
          className={`${
            pathname === "/" && " font-semibold"
          } text-lg   hover:text-primary `}
          href="/"
        >
          Home
        </Link>
      </div>
      <div className="">
        {" "}
        <Link
          className={`${
            pathname === "/template" && " font-semibold"
          } text-lg   hover:text-primary `}
          href="/template"
        >
          Template
        </Link>
      </div>
    </div>
  );
}
