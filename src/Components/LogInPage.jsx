import React from "react";
import SideOfPage from "./SideOfPage";

const LogInPage = () => {
   return (
      <section className="flex items-center justify-center">
         <SideOfPage />
         <div className="flex flex-col justify-between shadow-[0px_-10px_20px_-6px_rgb(0_0_0_/_0.1),_0_10px_20px_-6px_rgb(0_0_0_/_0.1)] w-[30rem] h-[40rem] p-20">
            <h4 className="text-[20px] font-semibold text-center">Log in Form</h4>

            <form action="" className="flex flex-col">
               <input
                  className="border-b-[2px] w-full focus:outline-0 h-10 px-5"
                  placeholder="Write Email Address"
                  type="email"
                  name="email"
                  id="email"
               />
               <input
                  className="border-b-[2px] w-full focus:outline-0 h-10 px-5 mt-8"
                  placeholder="Write Password"
                  type="pass"
                  name="pass"
                  id="pass"
               />
               <h6 className="px-5 text-[12px]">Password must be 8 characters</h6>

               <div className="flex justify-center mt-16">
                  <button type="submit" className="px-8 py-3 bg-[#1678CB] text-white rounded-xl">
                     Log In
                  </button>
               </div>
            </form>
            <div className="flex justify-center gap-2">
               <h6>Don't have an account?</h6>
               <p className="text-[14px] text-[#1678CB] underline font-semibold">SIGNUP HERE</p>
            </div>
         </div>
      </section>
   );
};

export default LogInPage;
