import React, { useState } from "react";

const AttendedPerson = ({ data }) => {
   const [modal, setModal] = useState(false);
   const { branch, name, attendance, position } = data;

   const details = [];

   for (let key in attendance) {
      details.push({ date: key, info: attendance[key] });
   }

   return (
      <React.Fragment>
         <tr className="text-center mx-auto h-20">
            <td>
               <img
                  className="md:w-10 w-8 mx-auto"
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
               />
            </td>
            <td className="md:text-base text-xs">{name}</td>
            <td className="md:text-base text-xs">{position}</td>
            <td className="md:text-base text-xs">{branch}</td>
            <td>
               <button onClick={() => setModal(!modal)} className="md:px-6 px-3 md:py-3 py-1 bg-[#68b6f5] rounded-full text-white shadow-md">
                  Check
               </button>
            </td>
         </tr>

         {modal && (
            <div className="fixed top-[20%] left-[-50%] right-[-50%] bottom-[-50%] z-50 max-w-[50rem] h-[35rem] overflow-auto p-5 bg-white w-full mx-auto shadow-md">
               <table className="w-full relative">
                  <tr className="w-full flex justify-around items-center h-10 bg-[#3b8bea] text-white">
                     <td>Date</td>
                     <td>Status</td>
                  </tr>
                  {details.map((data, i) => (
                     <tr key={i} className="h-10">
                        <td>{data?.date}</td>
                        <td>{data?.info?.status}</td>
                     </tr>
                  ))}
               </table>
               <button onClick={() => setModal(false)} className="absolute px-3 py-2 bg-black text-white top-5 right-5">
                  close
               </button>
            </div>
         )}
      </React.Fragment>
   );
};

export default AttendedPerson;
