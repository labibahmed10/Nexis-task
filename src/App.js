import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogInPage from "./Components/LogInPage";
import SignUpPage from "./Components/SignUpPage";
import "react-toastify/dist/ReactToastify.css";
import Attendance from "./Components/Attendance/Attendance";

function App() {
   return (
      <main className="flex justify-center items-center h-screen">
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
