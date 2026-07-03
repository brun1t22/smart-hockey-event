// Inicializar Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROJECT.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Capturar el formulario
document.getElementById("registroForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const email = document.getElementById("email").value;
  const acceso = document.getElementById("acceso").value;

  await db.collection("usuarios").add({
    nombre,
    apellido,
    dni,
    email,
    acceso,
    pagado: false,
    ingreso: false
  });

  alert("Registro enviado. Te confirmaremos por correo cuando se habilite tu QR.");
});
