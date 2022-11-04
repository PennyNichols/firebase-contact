import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'



// .env variable assignment setup:
// REACT_APP_apiKey=
// REACT_APP_authDomain=
// REACT_APP_projectId=
// REACT_APP_storageBucket=
// REACT_APP_messagingSenderId=
// REACT_APP_appId=



const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messageSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)