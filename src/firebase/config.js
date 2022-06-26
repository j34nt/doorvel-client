// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPIhR5qIvqYz1xTYvGrrU8OhEzVspAEDs",
  authDomain: "portafolio-3bbd1.firebaseapp.com",
  databaseURL: "https://portafolio-3bbd1.firebaseio.com",
  projectId: "portafolio-3bbd1",
  storageBucket: "portafolio-3bbd1.appspot.com",
  messagingSenderId: "397924139584",
  appId: "1:397924139584:web:a91355ee049fb36308d5a5"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


export const firebaseDB = getFirestore(firebaseApp);