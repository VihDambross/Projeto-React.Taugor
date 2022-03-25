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


export const firebaseImpl = firebase.initializeApp(firebaseConfig);

export function firebaseCreateUser(name, email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
      firebase.database().ref('/Users').push({
          name: name,
          email: email,
          password: password
      }).then().catch((error)=>console.log((error.code + error.message)))
  })
  .catch((error) => {
      throw new Error (error.code + error.message)
  })
};

export function firebaseSingIn(email, password){
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
      console.log('Usuário logado!')
  })
  .catch((error) => {
      throw new Error (error.code + error.message)
  
  });
}

export function firebaseSingOut(){
  firebase.auth().signOut().then(() => {
      
  }).catch((error) => {
      console.log(error)
  });
}