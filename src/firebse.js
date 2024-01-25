
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8jbjgJ3mt_q5oelsM4H2b-YqPHQdHjDI",
  authDomain: "authentication-firebase-45e76.firebaseapp.com",
  projectId: "authentication-firebase-45e76",
  storageBucket: "authentication-firebase-45e76.appspot.com",
  messagingSenderId: "971246182164",
  appId: "1:971246182164:web:3d5743e12e874927422c01"
};


const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);

export default app