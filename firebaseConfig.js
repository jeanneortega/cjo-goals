import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcEDVIGey1u8NrgWCO0doi60veV5pRcvE",
  authDomain: "cjo-goals.firebaseapp.com",
  projectId: "cjo-goals",
  storageBucket: "cjo-goals.firebasestorage.app",
  messagingSenderId: "455406483071",
  appId: "1:455406483071:web:238924a4b09e3167cdb14a"
};


//
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)