import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🏥 HealthCare Hospital</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/book-appointment" className="hover:underline">Book Appointment</Link>
          <Link to="/doctor-login" className="bg-white text-blue-600 px-4 py-2 rounded-md">Doctor Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
