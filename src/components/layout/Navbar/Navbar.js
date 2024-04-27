import React from "react";
import NavLogo from "./NavLogo";
import Links from "./Links";

export default function Navbar() {
  return (
    <div className="bg-primary py-2">
      <div className="container-sk flex items-center justify-between relative">
        <NavLogo />
        <Links />
      </div>
    </div>
  );
}
