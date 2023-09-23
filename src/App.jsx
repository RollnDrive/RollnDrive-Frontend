import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import MDR from "./pages/Products/MDR/MDR";
import BrushlessMotor from "./pages/Products/BrushlessMotor/BrushlessMotor";
import GearedMotor from "./pages/Products/GearedMotor/GearedMotor";
import GearBox from "./pages/Products/GearBox/GearBox";
import MotorController from "./pages/Products/MotorController/MotorController";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Validate from "./pages/Support/Validate/Validate";
import GetSpecs from "./pages/Support/GetSpecs/GetSpecs";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products:mdr" element={<MDR />} />
          <Route path="/products:brushlessmotor" element={<BrushlessMotor />} />
          <Route path="/products:gearedmotor" element={<GearedMotor />} />
          <Route path="/products:gearboxes" element={<GearBox />} />
          <Route path="/products:motorcontroller" element={<MotorController />} />
          <Route path="/support:validate" element={<Validate />} />
          <Route path="/support:specs" element={<GetSpecs />} />
          <Route path="/about" element={<About />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}