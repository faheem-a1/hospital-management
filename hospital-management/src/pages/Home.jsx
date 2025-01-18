import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to HealthCare Hospital</h1>
        <p className="text-lg text-gray-600 mt-4">Providing quality healthcare with professional doctors.</p>
        <a href="/book-appointment" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg">
          Book an Appointment
        </a>
      </div>
    </div>
  );
};

export default Home;
