 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyD1ofuZhmtdW_tqqAP29IEnNe1O_JgUVAU",
   authDomain: "nps-jsi17-hb.firebaseapp.com",
   projectId: "nps-jsi17-hb",
   storageBucket: "nps-jsi17-hb.appspot.com",
   messagingSenderId: "173064324828",
   appId: "1:173064324828:web:df4febb2f11c9892fd9619"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);