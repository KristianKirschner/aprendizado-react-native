import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "dev-curso-39231.firebaseapp.com",
  projectId: "dev-curso-39231",
  storageBucket: "dev-curso-39231.firebasestorage.app",
  messagingSenderId: "441926395213",
  appId: "1:441926395213:web:7c72c8f3611d67cb050304"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};