import React from "react";
import sidePic from "../images/side.jpg";
import Navbar from "./Navbar";

const SideOfPage = () => {
   return (
      <section className="p-16">
         <Navbar />
         <img className="w-[50rem]" src={sidePic} alt="" />
      </section>
   );
};

export default SideOfPage;
