"use client";

import React, { useEffect, useState } from "react";
import Template from "@/components/molecules/Template";

export default function Page() {
  const [resData, setResData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(process.env.NEXT_PUBLIC_GET_TEMPLATE_URL, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEMPLATE_TOKEN}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setResData(data?.body);
      });
  }, []);

  return (
    <div>
      <title>Template - Welcome to BEM Group</title>
      {isLoading ? (
        <div className="container mx-auto ">
          <p className="text-lg font-semibold text-blue-950 text-center py-10">
            Loading...
          </p>
        </div>
      ) : (
        <Template data={resData} />
      )}
    </div>
  );
}
