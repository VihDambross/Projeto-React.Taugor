// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-XkpsIah32Kq5uRjHS8HtWpiSuy7fvZo",
  authDomain: "reactproject-taugor.firebaseapp.com",
  projectId: "reactproject-taugor",
  storageBucket: "reactproject-taugor.appspot.com",
  messagingSenderId: "322368724551",
  appId: "1:322368724551:web:6ed99c8945e269e5559b62",
  measurementId: "G-6SW9KDZML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);