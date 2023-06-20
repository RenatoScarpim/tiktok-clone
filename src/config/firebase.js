import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAVfbWingYgwBQdthrh7y8CAIsKFIuP6xI",
  authDomain: "tiktok---jornada-a0a8f.firebaseapp.com",
  projectId: "tiktok---jornada-a0a8f",
  storageBucket: "tiktok---jornada-a0a8f.appspot.com",
  messagingSenderId: "119921186566",
  appId: "1:119921186566:web:4b914e1816cb355686b087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;