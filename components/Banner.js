import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full h-screen homepage">
      <div className="absolute w-4/5 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="my-8 text-5xl">Explore food from around the world</h1>
        <Link
          href={"/types"}
          className="px-2 py-2 text-xl bg-gray-300 rounded cursor-pointer shadow-gray-50 hover:bg-blue-500 hover:text-white"
        >
          List of Cuisines
        </Link>
      </div>
    </div>
  );
}
