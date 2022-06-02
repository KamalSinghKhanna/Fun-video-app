// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZKR6Rgvvqzhvn__VLBjxG2kMLKufsTEU",
    authDomain: "video-app-5d9a7.firebaseapp.com",
    projectId: "video-app-5d9a7",
    storageBucket: "video-app-5d9a7.appspot.com",
    messagingSenderId: "363135993649",
    appId: "1:363135993649:web:0be00c7fa3249799eb9210",
    measurementId: "G-LNV71YE1JM"
  };

 
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  
  export default db;