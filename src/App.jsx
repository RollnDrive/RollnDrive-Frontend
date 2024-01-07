import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import MDR from "./pages/Products/MDR/MDR";
import BrushlessMotor from "./pages/Products/BrushlessMotor/BrushlessMotor";
import GearedMotor from "./pages/Products/GearedMotor/GearedMotor";
import MotorController from "./pages/Products/MotorController/MotorController";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Validate from "./pages/Support/Validate/Validate";
import GetSpecs from "./pages/Support/GetSpecs/GetSpecs";
import CustomizedGearedMotors from "./pages/Products/CustomizedGearedMotors/CustomizedGearedMotors";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import TermsOfService from "./pages/TermsOfService/Terms";
import WarrantyPolicy from "./pages/Warranty/Wrranty";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products:mdr" element={<MDR />} />
          <Route path="/products:brushlessmotor" element={<BrushlessMotor />} />
          <Route path="/products:gearedmotor" element={<GearedMotor />} />
          <Route path="/products:customized-geared-motors" element={<CustomizedGearedMotors />} />
          <Route path="/products:motorcontroller" element={<MotorController />} />
          <Route path="/support:validate" element={<Validate />} />
          <Route path="/support:specs" element={<GetSpecs />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}