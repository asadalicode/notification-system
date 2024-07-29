import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FirebaseApiKey,
    authDomain: import.meta.env.VITE_REACT_FirebaseAuthDomain,
    projectId: import.meta.env.VITE_REACT_FirebaseProjectId,
    storageBucket: import.meta.env.VITE_REACT_FirebaseStorageBucket,
    messagingSenderId: import.meta.env.VITE_REACT_FirebaseMessagingSenderId,
    appId: import.meta.env.VITE_REACT_REACT_AppId,
    measurementId: import.meta.env.VITE_REACT_REACT_MeasurementId,
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Connect to Firebase emulators
if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', 8080);
  }
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

export { db };
