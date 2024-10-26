// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDXZHauF9dU2uCGO90qX_i7xXBlRT1niI",
  authDomain: "netflix-gpt-230bd.firebaseapp.com",
  projectId: "netflix-gpt-230bd",
  storageBucket: "netflix-gpt-230bd.appspot.com",
  messagingSenderId: "481331685779",
  appId: "1:481331685779:web:639b6b98b9cbe718e62066",
  measurementId: "G-B5HWZPVZJ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
