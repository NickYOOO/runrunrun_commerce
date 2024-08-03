import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD4FfTja_17odyalISsQZbvCuSb0MowTdo',
  authDomain: 'runrunrun-af0f5.firebaseapp.com',
  projectId: 'runrunrun-af0f5',
  storageBucket: 'runrunrun-af0f5.appspot.com',
  messagingSenderId: '511000634983',
  appId: '1:511000634983:web:c7fd72a60050092642d6c2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
