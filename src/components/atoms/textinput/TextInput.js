import React from "react";

export default function TextInput({onChange,onBlur}) {
  return (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
      id="email"
      type="email"
      required
      autoComplete="password"
      onChange={(e) => {
        onChange && onChange(e)
      }}
      onBlur={(e) => {
        onBlur && onBlur(e)
       
      }}
    />
  );
}
