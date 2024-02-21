
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBPMr3pTGSUKVBbpdcCCGJkH2oq5oEUBtI",
  authDomain: "react-netflix-clone-7a0bf.firebaseapp.com",
  projectId: "react-netflix-clone-7a0bf",
  storageBucket: "react-netflix-clone-7a0bf.appspot.com",
  messagingSenderId: "457875219177",
  appId: "1:457875219177:web:700c6c54159e297a1ec678",
  measurementId: "G-LXC1HWPM2Y"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
