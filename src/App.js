import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LogInPage from "./Components/LogInPage";
import SignUpPage from "./Components/SignUpPages/SignUpPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
   return (
      <main className="flex justify-center items-center h-screen">
         <Routes>
            <Route path="/" element={<SignUpPage />}></Route>
            <Route index path="signup" element={<SignUpPage />}></Route>
            <Route path="login" element={<LogInPage />}></Route>
         </Routes>
         <ToastContainer theme="dark" />
      </main>
   );
}

export default App;
