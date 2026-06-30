// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_UDQIgvGrl5RuNNc7P8msWBEUswOl6ZM",
  authDomain: "proyecyott.firebaseapp.com",
  projectId: "proyecyott",
  storageBucket: "proyecyott.firebasestorage.app",
  messagingSenderId: "204844592298",
  appId: "1:204844592298:web:f582df10c490fe29b9b4d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app)

export {db, auth};