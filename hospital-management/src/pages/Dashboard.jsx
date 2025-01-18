import React, { useState, useEffect } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import dayjs from "dayjs"; // For date formatting

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore();
  const auth = getAuth();
  const doctorEmail = auth.currentUser?.email; // Use the email from Firebase Authentication

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!doctorEmail) {
        alert("Please log in as a doctor.");
        return;
      }

      console.log("Doctor email: ", doctorEmail);

      try {
        const today = dayjs().startOf("day"); // Get the start of the current day
        const todayStr = today.format("YYYY-MM-DD"); // Format as "YYYY-MM-DD" for comparison

        console.log("Fetching appointments for date: ", todayStr);

        // Query appointments for the current day, filter by doctorEmail
        const appointmentQuery = query(
          collection(db, "appointments"),
          where("doctorEmail", "==", doctorEmail)
          // Temporarily remove the date filter for broader results
          // where("date", "==", todayStr) // Uncomment this line once date format is confirmed
        );

        const querySnapshot = await getDocs(appointmentQuery);

        console.log("Query Snapshot: ", querySnapshot);
        
        if (querySnapshot.empty) {
          console.log("No appointments found.");
        } else {
          querySnapshot.docs.forEach(doc => {
            console.log("Appointment Data: ", doc.data());  // Log appointment data
          });
        }

        const appointmentList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setAppointments(appointmentList);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [doctorEmail, db]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase Authentication
      console.log("Logged out successfully");
      // Redirect to login page (or home) after logout
      window.location.href = "/doctor-login"; // Adjust the path according to your routing setup
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
        Today's Appointments
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded-lg mb-6"
      >
        Log Out
      </button>

      {loading ? (
        <p className="text-center text-gray-600">Loading appointments...</p>
      ) : (
        <>
          {appointments.length === 0 ? (
            <p className="text-center text-gray-600">No appointments today.</p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="bg-white p-4 shadow-md rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-blue-600">
                    {appointment.patientName}
                  </h3>
                  <p className="text-gray-700">Email: {appointment.email}</p>
                  <p className="text-gray-700">Phone: {appointment.phone}</p>
                  <p className="text-gray-700">Date: {appointment.appointmentDate}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DoctorDashboard;
