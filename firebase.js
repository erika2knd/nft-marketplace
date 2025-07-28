import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZOpT9LdAxCrGZl4GybkAg79-oHCyrylI",
  authDomain: "nft-marketplace-95ca0.firebaseapp.com",
  projectId: "nft-marketplace-95ca0",
  storageBucket: "nft-marketplace-95ca0.firebasestorage.app",
  messagingSenderId: "286910343291",
  appId: "1:286910343291:web:b374c7da9cd74c871a9ade"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
