import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7Xk_XzBDhonGuVYgUa-eihnvOEMDco6o",
  authDomain: "nexa-distraction-blocker.firebaseapp.com",
  projectId: "nexa-distraction-blocker",
  storageBucket: "nexa-distraction-blocker.firebasestorage.app",
  messagingSenderId: "11541745028",
  appId: "1:11541745028:web:6f36bbbd316e1c7fd0e1d1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();