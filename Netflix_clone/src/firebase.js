// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_Firebase_key),
  authDomain: String(import.meta.env.VITE_authDomain),
  projectId: String(import.meta.env.VITE_projectId),
  storageBucket: String(import.meta.env.VITE_storageId),
  messagingSenderId: String(import.meta.env.VITE_messageId),
  appId: String(import.meta.env.VITE_appId)
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)