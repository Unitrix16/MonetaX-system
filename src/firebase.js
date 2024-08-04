// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,googleAuthProvider} from "firebase/firestore";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl88yWlQGQjJZ2wI79d3k2eRZ5f1cPtiw",
  authDomain: "financely-ed4c3.firebaseapp.com",
  projectId: "financely-ed4c3",
  storageBucket: "financely-ed4c3.appspot.com",
  messagingSenderId: "45743834661",
  appId: "1:45743834661:web:dd8f8123f2436914a8a1cc",
  measurementId: "G-JBLDLX23PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = googleAuthProvider(auth);
export{db, auth, provider, doc, setDoc};