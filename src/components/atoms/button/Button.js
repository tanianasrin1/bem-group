import React from "react";
import Spinner from "@/components/atoms/spinner/Spinner";

export default function Button({ type, onClick, isLoading, disabled,children }) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={(e) => {
        onClick && onClick(e);
      }}
      className="bg-primary flex items-center justify-center gap-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mx-auto w-full"
    >
      {isLoading && <Spinner />}
      <span>{children}</span>
    </button>
  );
}
