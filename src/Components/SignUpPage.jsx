import React from "react";
import { useState } from "react";
import SideOfPage from "./SideOfPage";
import { VscArrowRight } from "react-icons/vsc";
import { useReducer } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
   const [index, setIndex] = useState(1);
   const navigate = useNavigate();

   const initialState = {
      first_name: "",
      last_Name: "",
      phone_number: "",
      email: "",
      password: "",
   };

   const reducer = (state, action) => {
      switch (action.type) {
         case "first_name":
            return {
               ...state,
               first_name: action.first_name,
            };
         case "last_Name":
            return {
               ...state,
               last_Name: action.last_Name,
            };
         case "phone_number":
            return {
               ...state,
               phone_number: action.phone_number,
            };
         case "email":
            return {
               ...state,
               email: action.email,
            };
         case "password":
            return {
               ...state,
               password: action.password,
            };

         default:
            return state;
      }
   };

   const [mainState, dispatch] = useReducer(reducer, initialState);

   const handleSubmitNames = (e) => {
      e.preventDefault();
      setIndex(2);
   };

   const handleSubmitPhoneEmail = (e) => {
      e.preventDefault();
      setIndex(3);
   };

   const handleSubmitPassword = (e) => {
      e.preventDefault();

      fetch(`https://test.nexisltd.com/signup`, {
         method: "POST",
         body: JSON.stringify(mainState),
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            data?.sucess ? toast.success(data?.sucess) : toast.error(data?.error);
            data?.sucess && navigate("/login");
         });
   };

   return (
      <section className="flex md:flex-row flex-col items-center justify-center">
         <SideOfPage />

         <div className="flex flex-col shadow-[0px_-10px_20px_-6px_rgb(0_0_0_/_0.1),_0_10px_20px_-6px_rgb(0_0_0_/_0.1)] md:w-[30rem] md:h-[40rem] md:p-20 p-5">
            <h4 className="text-[20px] font-semibold text-center">Sign Up Form</h4>

            {index === 1 && (
               <React.Fragment>
                  <form action="" className="flex flex-col mt-24" onSubmit={handleSubmitNames}>
                     <input
                        className="border-b-[2px] w-full focus:outline-0 h-10 px-5"
                        placeholder="Write First Name"
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={mainState.first_name}
                        onChange={(e) => dispatch({ type: "first_name", first_name: e.target.value })}
                     />
                     <input
                        className="border-b-[2px] w-full focus:outline-0 h-10 px-5 mt-8"
                        placeholder="Write Last Name"
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={mainState.last_Name}
                        onChange={(e) => dispatch({ type: "last_Name", last_Name: e.target.value })}
                     />

                     <div className="flex justify-center mt-16">
                        <button
                           className="md:px-8 px-5 md:py-3 py-2 bg-[#1678CB] text-white rounded-xl flex justify-center items-center gap-1 shadow-slate-700
                        shadow-[0px_2px_5px__rgb(0_0_0_/_0.05)]"
                        >
                           Next <VscArrowRight className="font-[900] text-xl" />
                        </button>
                     </div>
                  </form>

                  <div className="flex md:justify-center items-center md:gap-2 gap-1 mt-24">
                     <h6 className="text-sm">Already have an account?</h6>
                     <p
                        onClick={() => navigate("/login")}
                        className="md:text-[14px] text-[10px] text-[#1678CB] underline font-semibold cursor-pointer"
                     >
                        LOGIN HERE
                     </p>
                  </div>
               </React.Fragment>
            )}

            {index === 2 && (
               <form action="" className="flex flex-col mt-24" onSubmit={handleSubmitPhoneEmail}>
                  <div className="flex justify-center items-center md:gap-2 gap-1">
                     <input className="border-b-[2px] md:w-20 w-10 focus:outline-0 h-10 px-5" placeholder="+880" type="text" name="code" id="code" />
                     <input
                        className="border-b-[2px] w-full focus:outline-0 h-10 px-5"
                        placeholder="Write Number"
                        type="number"
                        name="number"
                        id="number"
                        value={mainState.phone_number}
                        onChange={(e) => dispatch({ type: "phone_number", phone_number: e.target.value })}
                     />
                  </div>

                  <input
                     className="border-b-[2px] w-full focus:outline-0 h-10 px-5 mt-8"
                     placeholder="Write Email Address"
                     type="email"
                     name="email"
                     id="email"
                     value={mainState.email}
                     onChange={(e) => dispatch({ type: "email", email: e.target.value })}
                  />

                  <div className="flex justify-center items-center md:gap-10 gap-5 mt-16">
                     <p className="md:ml-[-75px] cursor-pointer" onClick={() => setIndex(1)}>
                        Back
                     </p>
                     <button
                        className="md:px-8 px-5 md:py-3 py-2 bg-[#1678CB] text-white rounded-xl flex justify-center items-center gap-1 shadow-slate-700
                        shadow-[0px_2px_5px__rgb(0_0_0_/_0.05)]"
                     >
                        Next <VscArrowRight className="font-[900]" />
                     </button>
                  </div>
               </form>
            )}

            {index === 3 && (
               <form action="" className="flex flex-col mt-24" onSubmit={handleSubmitPassword}>
                  <input
                     className="border-b-[2px] w-full focus:outline-0 h-10 px-5 mt-8"
                     autoComplete="false"
                     placeholder="Write Password"
                     type="password"
                     name="pass"
                     id="pass"
                     value={mainState.password}
                     onChange={(e) => dispatch({ type: "password", password: e.target.value })}
                  />
                  <h6 className="px-5 text-[12px]">Password must be 8 characters</h6>

                  <div className="flex justify-center items-center mt-16 md:gap-10 gap-5">
                     <p className="md:ml-[-75px] cursor-pointer" onClick={() => setIndex(2)}>
                        Back
                     </p>
                     <button
                        type="submit"
                        className="md:px-8 px-5 md:py-3 py-2 bg-[#1678CB] text-white rounded-xl flex justify-center items-center gap-1 shadow-slate-700
                        shadow-[0px_2px_5px__rgb(0_0_0_/_0.05)]"
                     >
                        Sign Up
                     </button>
                  </div>
               </form>
            )}
         </div>
      </section>
   );
};

export default SignUpPage;
