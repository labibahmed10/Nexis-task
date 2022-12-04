import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogInPage from "./Components/LogInPage";
import SignUpPage from "./Components/SignUpPage";
import "react-toastify/dist/ReactToastify.css";
import Attendance from "./Components/Attendance/Attendance";

function App() {
   return (
      <main className="flex md:flex-row flex-col md:justify-center md:items-center md:mt-28 px-5 md:py-0 py-10">
         <Routes>
            <Route path="/" element={<SignUpPage />}></Route>
            <Route index path="signup" element={<SignUpPage />}></Route>
            <Route path="login" element={<LogInPage />}></Route>
            <Route path="attendance" element={<Attendance />}></Route>
         </Routes>
         <ToastContainer theme="dark" />
      </main>
   );
}

export default App;
