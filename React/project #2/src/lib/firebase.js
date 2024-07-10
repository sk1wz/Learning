
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjDqIi5VVNMYfQFXA_k40a8TYXukDqnlY",
  authDomain: "reactchat-9e02b.firebaseapp.com",
  projectId: "reactchat-9e02b",
  storageBucket: "reactchat-9e02b.appspot.com",
  messagingSenderId: "1011765916978",
  appId: "1:1011765916978:web:df0b31435e7710c9e8132b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()