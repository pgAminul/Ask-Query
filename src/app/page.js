import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./HomeFolders/Home";

export default function page() {
  return (
    <div>
      <div className="h-[64px]">
        <Navbar />
      </div>
      <Home />
    </div>
  );
}
