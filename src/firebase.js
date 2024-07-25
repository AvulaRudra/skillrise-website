import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBO-0m_dczIjwuiU8fj0-ZaWLUthpBQV3U",
  authDomain: "skillrise-52dfc.firebaseapp.com",
  projectId: "skillrise-52dfc",
  storageBucket: "skillrise-52dfc.appspot.com",
  messagingSenderId: "470730494073",
  appId: "1:470730494073:web:fdce2029cb61cac3a9c4a8",
  measurementId: "G-NMHWJW0E51"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
