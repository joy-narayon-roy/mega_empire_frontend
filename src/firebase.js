import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaiUSSpHMhfYVAhqrdbF2L9Q7wf24VuLg",
  authDomain: "megaempire-6291d.firebaseapp.com",
  databaseURL: "https://megaempire-6291d-default-rtdb.firebaseio.com",
  projectId: "megaempire-6291d",
  storageBucket: "megaempire-6291d.appspot.com",
  messagingSenderId: "117016137624",
  appId: "1:117016137624:web:471ba567e60be8bb7aa5ed",
  measurementId: "G-3NLWXVL63R",
};

const app = initializeApp(firebaseConfig);
export default app;
