import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUkLLdx0cULF-6P9X1pJFIOyyfKks_W1U",
    authDomain: "shoppy-hub.firebaseapp.com",
    projectId: "shoppy-hub",
    storageBucket: "shoppy-hub.appspot.com",
    messagingSenderId: "799022966951",
    appId: "1:799022966951:web:b6b3995f4c1598ea62d382"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);