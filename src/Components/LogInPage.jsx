import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SideOfPage from "./SideOfPage";

const LogInPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   let navigate = useNavigate();

   const user = {
      email: email,
      password: password,
   };

   const handleLogin = async (e) => {
      e.preventDefault();

      await fetch(`https://test.nexisltd.com/login`, {
         method: "POST",
         body: JSON.stringify(user),
      })
         .then((response) => response.json())
         .then((data) => {
            localStorage.setItem("access_token", data?.access_token);
            !data.error ? toast.success("Login Successful") : toast.error(data.error);
            !data.error && navigate("/attendance");
         });
   };

   return (
      <section className="flex items-center justify-center">
         <SideOfPage />
         <div className="flex flex-col shadow-[0px_-10px_20px_-6px_rgb(0_0_0_/_0.1),_0_10px_20px_-6px_rgb(0_0_0_/_0.1)] w-[30rem] h-[40rem] p-20">
            <h4 className="text-[20px] font-semibold text-center">Log in Form</h4>

            <form action="" className="flex flex-col mt-24" onSubmit={handleLogin}>
               <input
                  className="border-b-[2px] w-full focus:outline-0 h-10 px-5"
                  placeholder="Write Email Address"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  className="border-b-[2px] w-full focus:outline-0 h-10 px-5 mt-8"
                  placeholder="Write Password"
                  autoComplete="false"
                  type="password"
                  name="pass"
                  id="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <h6 className="px-5 text-[12px]">Password must be 8 characters</h6>

               <div className="flex justify-center mt-16">
                  <button
                     type="submit"
                     className="px-8 py-3 bg-[#1678CB] text-white rounded-xl shadow-slate-700 shadow-[0px_2px_5px__rgb(0_0_0_/_0.05)]"
                  >
                     Log In
                  </button>
               </div>
            </form>

            <div className="flex justify-center items-center gap-2 mt-24 ">
               <h6>Don't have an account?</h6>
               <p onClick={() => navigate("/signup")} className="text-[14px] text-[#1678CB] underline font-semibold cursor-pointer">
                  SIGNUP HERE
               </p>
            </div>
         </div>
      </section>
   );
};

export default LogInPage;
