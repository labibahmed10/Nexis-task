import React from "react";
import sidePic from "../images/side.jpg";
import logo from "../images/Vector.svg";

const SideOfPage = () => {
   return (
      <section className="p-16">
         <img src={logo} alt="" />
         <img className="w-[50rem]" src={sidePic} alt="" />
      </section>
   );
};

export default SideOfPage;
