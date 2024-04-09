import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAbfFUumkym_gIQIehytuoM588sMbiu7Y",
  authDomain: "next-todo-d02af.firebaseapp.com",
  projectId: "next-todo-d02af",
  storageBucket: "next-todo-d02af.appspot.com",
  messagingSenderId: "398717624865",
  appId: "1:398717624865:web:c3a1833a9acda51e2a7960",
  measurementId: "G-F4KD131FHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const analytics = () => {
  if (typeof window !== "undefined") {
    return getAnalytics(app);
  } else {
    return null
  }
}







