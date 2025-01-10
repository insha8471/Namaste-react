// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMSqLpzC8kU4ywsl5OEE6E_58Q10Vrf28",
  authDomain: "platemate-55a22.firebaseapp.com",
  projectId: "platemate-55a22",
  storageBucket: "platemate-55a22.firebasestorage.app",
  messagingSenderId: "570315591591",
  appId: "1:570315591591:web:0cea7fb8d06dd3defcb082",
  measurementId: "G-YDP7C0W0F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();