import React from "react";
import image from "../../images/side.jpg";

const AttendedPerson = ({ data }) => {
   console.log(data);
   const { branch, name, profile_pic, attendance, position } = data;
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
               <button className="px-6 py-3 bg-[#68b6f5] rounded-full text-white shadow-md">Type me</button>
            </td>
         </tr>
      </React.Fragment>
   );
};

export default AttendedPerson;
