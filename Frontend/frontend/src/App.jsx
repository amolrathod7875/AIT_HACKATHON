import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FraudForm from "./pages/FraudForm.jsx";
import LoanForm from "./pages/LoanForm.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import AdminLogs from "./pages/AdminLogs.jsx";
import Home from "./pages/Home.jsx";
import EmiCalculator from "./pages/EmiCal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emi" element={<EmiCalculator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fraud" element={<FraudForm />} />
        <Route path="/loan" element={<LoanForm />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/logs" element={<AdminLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
