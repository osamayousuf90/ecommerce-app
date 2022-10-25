// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF2vYrG_nAqIlsGU3dwlTS3ol3tOagfPE",
  authDomain: "ecommerce-6c572.firebaseapp.com",
  projectId: "ecommerce-6c572",
  storageBucket: "ecommerce-6c572.appspot.com",
  messagingSenderId: "1091716515897",
  appId: "1:1091716515897:web:2cb3922e595a8f789d65e8",
  measurementId: "G-W7K1B9977N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFireStore(app)