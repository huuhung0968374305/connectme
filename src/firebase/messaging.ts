// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAey3PNEuyp8ghka3hgj2RUtka_I8QPFmY',
  authDomain: 'connectme-6f243.firebaseapp.com',
  projectId: 'connectme-6f243',
  storageBucket: 'connectme-6f243.appspot.com',
  messagingSenderId: '815936169486',
  appId: '1:815936169486:web:51a9cc16d6c0964b0dbe5f',
  measurementId: 'G-J2BD7J64GF'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const messaging = getMessaging(app)
