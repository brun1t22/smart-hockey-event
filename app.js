// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3XqliF4oALMuuKFhtzEpE_7-eIm0jGQc",
  authDomain: "smarthockey-3aebd.firebaseapp.com",
  projectId: "smarthockey-3aebd",
  storageBucket: "smarthockey-3aebd.firebasestorage.app",
  messagingSenderId: "560324583192",
  appId: "1:560324583192:web:0dc9593181df61f822c86d",
  measurementId: "G-VBMY3G0RMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
