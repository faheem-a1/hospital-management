// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnJ3dAWX7oj7tzQkI_27Prv97JJTmhn74",
  authDomain: "hospital-management-syst-5e4a3.firebaseapp.com",
  projectId: "hospital-management-syst-5e4a3",
  storageBucket: "hospital-management-syst-5e4a3.firebasestorage.app",
  messagingSenderId: "256940519288",
  appId: "1:256940519288:web:b6aac76ab83c6a2a22a28d",
  measurementId: "G-BFWW7GJE6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };