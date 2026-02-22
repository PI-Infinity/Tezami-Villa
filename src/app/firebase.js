// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM61_liAhWXQcpUIaWHMCFMr5KV1sha3g",
  authDomain: "sako-videos.firebaseapp.com",
  projectId: "sako-videos",
  storageBucket: "sako-videos.appspot.com",
  messagingSenderId: "247457929529",
  appId: "1:247457929529:web:93f9fddfc257b92328f0e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
