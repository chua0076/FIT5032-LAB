import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyBU7RtzwEzcP9qChhJUksS1uDrWOg0jj3o",
  authDomain: "fit5032-week7-1429f.firebaseapp.com",
  projectId: "fit5032-week7-1429f",
  storageBucket: "fit5032-week7-1429f.firebasestorage.app",
  messagingSenderId: "402513592233",
  appId: "1:402513592233:web:d957e50f0f47af9d008eb8"
};
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
