import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, push, onValue, set, remove } from "firebase/database";

const app =initializeApp(firebaseConfig)

const database = getDatabase(app);

const auth = getAuth(app);