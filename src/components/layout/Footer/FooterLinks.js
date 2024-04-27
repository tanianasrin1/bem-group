import Link from "next/link";
import React from "react";

export default function FooterLinks() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
      <div className=" overflow-hidden lg:text-lg md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="text-[22px] font-semibold  mb-6"> Our Links</h3>

        <div>
          <Link href="/" className="w-max cursor-pointer hover:text-primary">
            <span>Home</span>
          </Link>
        </div>

        <div>
          <Link
            href="/template"
            className="w-max cursor-pointer hover:text-primary"
          >
            <span>Preview Template</span>
          </Link>
        </div>
      </div>

      {/* about */}
      <div className=" overflow-hidden lg:text-lg md:text-base text-sm space-y-2 lg:mt-0 mt-6">
        <h3 className="text-[22px] font-semibold  mb-6"> Policy</h3>

        <div>
          <Link href="/" className="w-max cursor-pointer hover:text-primary">
            <span>Privacy Policy</span>
          </Link>
        </div>

        <div>
          <Link href="/" className="w-max cursor-pointer hover:text-primary">
            <span>Terms and Condition</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
