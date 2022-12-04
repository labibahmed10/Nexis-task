import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import AttendedPerson from "./AttendedPerson";

const Attendance = () => {
   const [attendance, setAttendance] = useState([]);

   const fetchData = async () => {
      const response = await fetch("https://test.nexisltd.com/test", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
         },
      });
      const allData = await response.json();
      const array = [];
      for (let key in allData) {
         array.push(allData[key]);
      }
      setAttendance(array);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <section className="md:w-[80rem] w-full md:overflow-auto overflow-scroll">
         <Navbar />
         <h1 className="text-center mx-auto md:w-[22rem] w-full md:px-5 px-3 md:py-5 py-2 bg-[#1678CB] md:text-2xl text-xl font-bold text-white mt-5 mb-20">
            Attendance Information
         </h1>

         <table className="w-full">
            <thead className="h-16 bg-[#3b8bea] text-white w-full">
               <tr className="px-5 md:px-0 md:text-base text-sm">
                  <th>Image</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Branch</th>
                  <th>Attendance</th>
               </tr>
            </thead>
            <tbody className="px-5 md:px-0">
               {attendance.map((data, i) => (
                  <AttendedPerson key={i} data={data} />
               ))}
            </tbody>
         </table>
      </section>
   );
};

export default Attendance;
