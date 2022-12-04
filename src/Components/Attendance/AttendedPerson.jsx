import React, { useState } from "react";

const AttendedPerson = ({ data }) => {
   const [modal, setModal] = useState(false);
   const { branch, name, profile_pic, attendance, position } = data;

   const details = [];

   for (let key in attendance) {
      details.push({ date: key, info: attendance[key] });
   }

   console.log(details);
   return (
      <React.Fragment>
         <tr className="text-center mx-auto h-20 ">
            <td>
               <img
                  className="w-10 mx-auto"
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
               />
            </td>
            <td>{name}</td>
            <td>{position}</td>
            <td>{branch}</td>
            <td>
               <button onClick={() => setModal(!modal)} className="px-6 py-3 bg-[#68b6f5] rounded-full text-white shadow-md">
                  Type me
               </button>
            </td>
         </tr>

         {modal && (
            <div className="fixed top-[20%] left-[-50%] right-[-50%] bottom-[-50%] z-50 max-w-[50rem] h-[35rem] overflow-auto p-5 bg-white w-full mx-auto shadow-md">
               <table className="w-full">
                  <tr className="flex justify-around items-center h-10 bg-[#3b8bea] text-white">
                     <td>Date</td>
                     <td>Status</td>
                  </tr>
                  {details.map((data, i) => (
                     <tr key={i} className="h-10 w-full">
                        <td>{data?.date}</td>
                        <td>{data?.info?.status}</td>
                     </tr>
                  ))}
               </table>
            </div>
         )}
      </React.Fragment>
   );
};

export default AttendedPerson;
