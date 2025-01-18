import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import BookAppointment from "./pages/BookAppointment";
import DoctorLogin from "./pages/DoctorLogin";
import Dashboard from "./pages/Dashboard"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
