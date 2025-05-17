
import React from "react";

import Hero from "../components/hero";
import Navbar from "../layouts/nav";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
   <div className="text-center">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      <p className="text-gray-700">Your Tailwind CSS setup is successful!</p>
    </div>
    </>
  );
}
