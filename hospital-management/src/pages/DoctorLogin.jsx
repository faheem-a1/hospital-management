import React, { useState } from "react";
import { auth } from "../firebaseConfig"; // Import initialized auth
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { useNavigate } from "react-router-dom"; // Navigation

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect on success
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-bold text-blue-600 text-center">Doctor Login</h1>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form className="mt-4" onSubmit={handleLogin}>
          <label className="block mb-2 text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block mt-4 mb-2 text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
