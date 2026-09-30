import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKEOft4drpiVs2NuCkH96VOIsxuaBPmSE",
  authDomain: "nextgenai-a7021.firebaseapp.com",
  projectId: "nextgenai-a7021",
  storageBucket: "nextgenai-a7021.firebasestorage.app",
  messagingSenderId: "830149657301",
  appId: "1:830149657301:web:e8e415a7c1e6c534f8185c",
  measurementId: "G-QFJJFEKKS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ⬇️ MAKE SURE THESE TWO LINES ARE PRESENT AND EXPORTED PROPERLY
export const auth = getAuth(app);
export default app;