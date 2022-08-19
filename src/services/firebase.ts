import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCN1qL4lKa_JeSPy1AUoMZooO7oGENgXvA",
  authDomain: "auth-358e2.firebaseapp.com",
  projectId: "auth-358e2",
  storageBucket: "auth-358e2.appspot.com",
  messagingSenderId: "841133418552",
  appId: "1:841133418552:web:5d2272874d27c19e21decd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 