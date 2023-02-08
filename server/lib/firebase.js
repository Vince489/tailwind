import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJDeJmZy9jofQxubLD0HKRK92aPkVug0c",
  authDomain: "auth-9c9f5.firebaseapp.com",
  projectId: "auth-9c9f5",
  storageBucket: "auth-9c9f5.appspot.com",
  messagingSenderId: "609614226776",
  appId: "1:609614226776:web:062b8332f19c862009f12d",
}


export const firebaseApp = initializeApp(firebaseConfig)

export const firestoreDb = getFirestore(firebaseApp)