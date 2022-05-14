
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBhqdZ43kAHjm0TZkm6a-pTQGNAVKtwVxo",
  authDomain: "doctors-portal-ce68b.firebaseapp.com",
  projectId: "doctors-portal-ce68b",
  storageBucket: "doctors-portal-ce68b.appspot.com",
  messagingSenderId: "190149774851",
  appId: "1:190149774851:web:8300fdb1e736fab0f88836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;