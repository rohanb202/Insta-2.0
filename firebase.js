// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmdLuRL2jvL2ZJBO2877Wqn49Lh7zjqNw",
  authDomain: "insta-2-b12fa.firebaseapp.com",
  projectId: "insta-2-b12fa",
  storageBucket: "insta-2-b12fa.appspot.com",
  messagingSenderId: "642072330203",
  appId: "1:642072330203:web:2aa0b823869990e74ff1fe",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
