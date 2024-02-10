
import { getDatabase, ref, push, onValue, set, remove } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBxtVBo3przSZzHVW2S8tTafp32icLP79k",
    authDomain: "recipevault-2d76b.firebaseapp.com",
    projectId: "recipevault-2d76b",
    storageBucket: "recipevault-2d76b.appspot.com",
    messagingSenderId: "192644938235",
    appId: "1:192644938235:web:e018ea11db6f92704ef35e"
  };


// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

// Set the language code for authentication
auth.languageCode = 'en';

// Create a GoogleAuthProvider instance
const provider = new GoogleAuthProvider();

// Get the Google login button element
const googleLogin = document.getElementById('google-login-btn');

// Attach a click event listener to the Google login button
  googleLogin.addEventListener('click', signInWithGoogle);

// Function to handle Google sign-in
function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Get user credentials and information
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;

      // Redirect to the .html page upon successful sign-in
      window.location.href = "../index.html";
    })
    .catch((error) => {
      // Handle authentication errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Authentication error: ${errorCode} - ${errorMessage}`);
    });
}
