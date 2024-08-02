// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCdE9eI5rJoiYs8eDUc_Z3QXmBo78HO7fE",
  authDomain: "ipa-2-440a3.firebaseapp.com",
  projectId: "ipa-2-440a3",
  storageBucket: "ipa-2-440a3.appspot.com",
  messagingSenderId: "838948683017",
  appId: "1:838948683017:web:892935d61104a3d95ee7d8",
  measurementId: "G-WD9E2ZH597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
