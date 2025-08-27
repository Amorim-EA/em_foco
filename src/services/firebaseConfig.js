import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzKPTtxdOF8XbREmlArryoonQ9hutpXpc",
  authDomain: "emfoco-f21ad.firebaseapp.com",
  projectId: "emfoco-f21ad",
  storageBucket: "emfoco-f21ad.firebasestorage.app",
  messagingSenderId: "757563651129",
  appId: "1:757563651129:web:64d3d9bff0634d72df49e8",
  measurementId: "G-FJGN0XVTT8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { getAuth, getFirestore, getStorage };

