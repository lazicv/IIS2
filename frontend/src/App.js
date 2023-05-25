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
import Machines from "./pages/Machines";
import CreateMachine from "./pages/CreateMachine";
import UpdateMachine from "./pages/UpdateMachine";
import CreatePlan from "./pages/CreatePlan";
import CreateEquipment from "./pages/CreateEquipment";
import Equipment from "./pages/Equipment";

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
            <Route path="/machines" element={<Machines />}></Route>
            <Route path="/machine/create" element={<CreateMachine />}></Route>
            <Route path="/machine/update" element={<UpdateMachine />}></Route>
            <Route path="/plan/create" element={<CreatePlan />}></Route>
            <Route path="/equipment/create" element={<CreateEquipment />}></Route>
            <Route path="/equipment" element={<Equipment />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
