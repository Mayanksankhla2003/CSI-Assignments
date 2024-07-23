import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfUbxBNlrov9dNbIf91y79tPbSJ_EbDzQ",
    authDomain: "quora-clone-e1e56.firebaseapp.com",
    projectId: "quora-clone-e1e56",
    storageBucket: "quora-clone-e1e56.appspot.com",
    messagingSenderId: "1056137418399",
    appId: "1:1056137418399:web:6f2254075af9509ad174aa",
    measurementId: "G-QWS40VC5ZR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const storage = getFirestore(app);
