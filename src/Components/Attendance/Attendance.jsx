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
      <section className="w-[80rem]">
         <Navbar />
         <h1 className="text-center mx-auto max-w-[480px] w-[90%] px-5 py-5 bg-[#1678CB] text-2xl font-bold text-white mt-5 mb-20">
            Attendance Information
         </h1>

         <table className="w-full">
            <thead className="h-16 bg-[#3b8bea] text-white">
               <th>Image</th>
               <th>Name</th>
               <th>Position</th>
               <th>Branch</th>
               <th>Attendance</th>
            </thead>
            <tbody className="overflow-y-scroll">
               {attendance.map((data, i) => (
                  <AttendedPerson key={i} data={data} />
               ))}
            </tbody>
         </table>
      </section>
   );
};

export default Attendance;
