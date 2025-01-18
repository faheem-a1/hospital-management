import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const BookAppointment = () => {
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor, setDoctor] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [doctorList, setDoctorList] = useState([]);

  const db = getFirestore();

  // Fetch doctors from Firestore
  useEffect(() => {
    const fetchDoctors = async () => {
      const querySnapshot = await getDocs(collection(db, "doctors"));
      const doctors = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDoctorList(doctors);
    };

    fetchDoctors();
  }, [db]);

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!doctorEmail || !appointmentDate) {
      alert("Please select a doctor and appointment date.");
      return;
    }

    try {
      // Save the appointment to Firestore
      const appointmentData = {
        patientName,
        email,
        phone,
        doctorEmail,
        appointmentDate, // Store the selected appointment date
      };

      // Save the appointment in the 'appointments' collection
      await addDoc(collection(db, "appointments"), appointmentData);
      alert(`Appointment booked for ${patientName} with ${doctor} on ${appointmentDate}!`);
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("There was an error booking the appointment.");
    }
  };

  // Handle doctor selection and fetch the corresponding email
  const handleDoctorSelect = (e) => {
    const selectedDoctor = e.target.value;
    setDoctor(selectedDoctor);
    
    // Find the doctor's email based on the selected name
    const selectedDoctorEmail = doctorList.find(
      (doctor) => doctor.name === selectedDoctor
    )?.email;
    setDoctorEmail(selectedDoctorEmail);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-blue-600 text-center">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg mt-6">
        <label className="block mb-2">Full Name:</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <label className="block mt-4 mb-2">Email:</label>
        <input
          type="email"
          className="w-full p-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mt-4 mb-2">Phone Number:</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label className="block mt-4 mb-2">Select Doctor:</label>
        <select
          className="w-full p-2 border rounded-md"
          value={doctor}
          onChange={handleDoctorSelect}
          required
        >
          <option value="">Select Doctor</option>
          {doctorList.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>

        <label className="block mt-4 mb-2">Appointment Date:</label>
        <input
          type="date"
          className="w-full p-2 border rounded-md"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />

        <button type="submit" className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md w-full">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
