import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxKri6L0LrqWv4DmGJ4HC6kZ9BT584yNw",
    authDomain: "tabrizz-d6efa.firebaseapp.com",
    projectId: "tabrizz-d6efa",
    storageBucket: "tabrizz-d6efa.appspot.com",
    messagingSenderId: "507404540342",
    appId: "1:507404540342:web:b09c7e8e595635a0960917",
    measurementId: "G-ZEK28RT4YX"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
