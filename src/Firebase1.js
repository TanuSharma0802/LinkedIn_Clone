import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGbIsbDr2ZsObzOLpdLg1-St0uo3lTzuw",
  authDomain: "linkedin-clone-134a8.firebaseapp.com",
  projectId: "linkedin-clone-134a8",
  storageBucket: "linkedin-clone-134a8.appspot.com",
  messagingSenderId: "192511080750",
  appId: "1:192511080750:web:3e26d15c4751fccf31a2bf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
