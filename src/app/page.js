import React from "react";
import Home from "./HomeFolders/Home";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./HomeFolders/Footer";

export default function page() {
  return (
    <div>
      <div className="h-[64px]">
        <Navbar />
      </div>
      <Home />
      <Footer />
    </div>
  );
}
