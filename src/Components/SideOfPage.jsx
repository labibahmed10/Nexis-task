import React from "react";
import sidePic from "../images/side.jpg";
import Navbar from "./Navbar";

const SideOfPage = () => {
   return (
      <section className="md:p-16">
         <Navbar />
         <img className="md:w-[50rem] w-full" src={sidePic} alt="" />
      </section>
   );
};

export default SideOfPage;
