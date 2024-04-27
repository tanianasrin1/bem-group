import React from "react";
import NavLogo from "@/components/layout/Navbar/NavLogo";
import Links from "@/components/layout/Navbar/Links";

export default function Navbar() {
  return (
    <div className="bg-secondary py-2">
      <div className="container-sk flex items-center justify-between relative">
        <NavLogo />
        <Links />

        <div>
          Sign Out
        </div>
        
        
      </div>
    </div>
  );
}
