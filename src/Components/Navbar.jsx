import React from "react";
import logo from "../images/Vector.svg";

const Navbar = () => {
   return (
      <header>
         <img className="md:w-fit w-28" src={logo} alt="" />
      </header>
   );
};

export default Navbar;
