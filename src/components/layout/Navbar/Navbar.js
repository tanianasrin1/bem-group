"use client"
import React from "react";
import NavLogo from "@/components/layout/Navbar/NavLogo";
import Links from "@/components/layout/Navbar/Links";
import { useRouter } from "next/navigation";
import { setAuthCookie } from "@/components/utils/fetch";

export default function Navbar() {
  const router = useRouter();

  const handleSignOut = () => {
    setAuthCookie("");

    router.push("/"); 
  };
  return (
    <div className="bg-secondary py-2">
      <div className="container-sk flex items-center justify-between relative">
        <NavLogo />
        <Links />

        <button className="bg-primary  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSignOut}>
          Sign Out
        </button>
        
        
      </div>
    </div>
  );
}
