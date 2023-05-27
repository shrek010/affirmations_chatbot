//FIREBASE CONFIGURATIONS

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRDn4wcpXyR3Fp3m_ompPYx-yNP92iQkI",
  authDomain: "projectchat-fab25.firebaseapp.com",
  projectId: "projectchat-fab25",
  storageBucket: "projectchat-fab25.appspot.com",
  messagingSenderId: "448838207498",
  appId: "1:448838207498:web:1561de4b416f21a53537f3",
  measurementId: "G-SFYP1JV4WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);