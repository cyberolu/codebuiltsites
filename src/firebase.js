// Firebase core imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKwImIxa3GxGbhVGUKdleBz3ka2H7Lu-w",
  authDomain: "codebuiltsites.firebaseapp.com",
  projectId: "codebuiltsites",
  storageBucket: "codebuiltsites.firebasestorage.app",
  messagingSenderId: "964465084240",
  appId: "1:964465084240:web:34b634ad1b5eebcc930e55",
  measurementId: "G-CWXBE32FFX"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
