import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import HomePage from "./pages/HomePage";
import Signout from "./utils/Signout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/homePage" element={<HomePage />}></Route>
            <Route path="/signout" element={<Signout />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
