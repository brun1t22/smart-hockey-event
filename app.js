import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuración de Firebase (ya la tenés)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "smarthockey-3aebd.firebaseapp.com",
  projectId: "smarthockey-3aebd",
  storageBucket: "smarthockey-3aebd.firebasestorage.app",
  messagingSenderId: "560324583192",
  appId: "1:560324583192:web:0dc95931814d6f1822c864",
  measurementId: "G-VBMY3G0RMG"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
