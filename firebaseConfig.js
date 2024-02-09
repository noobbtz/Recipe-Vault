import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, push, onValue, set, remove } from "firebase/database";

// Your web app's Firebase configuration
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

// Firebase authentication
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

// Firebase Realtime Database
const db = getDatabase(app);
const database = {
  ref,
  push,
  onValue,
  set,
  remove
};

export { app, auth, signInWithGoogle, db, database };
