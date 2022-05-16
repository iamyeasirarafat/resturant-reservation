
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAin0aJuNLpM1YXdVQz1nrqijTDvpquSlQ",
  authDomain: "restaurant-reservation-9fcef.firebaseapp.com",
  projectId: "restaurant-reservation-9fcef",
  storageBucket: "restaurant-reservation-9fcef.appspot.com",
  messagingSenderId: "1018597636292",
  appId: "1:1018597636292:web:22d60123a4a5543ee9f191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;