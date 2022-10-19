import { useState } from 'react';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP__API_KEY,
  authDomain: process.env.REACT_APP__AUTH_DOMAIN,
  projectId: process.env.REACT_APP__PROJECT_ID,
  storageBucket: process.env.REACT_APP__STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP__MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP__APP_ID,
  measurementId: process.env.REACT_APP__MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

function firebaseSignIn() {
  signInWithRedirect(auth, authProvider);
}

function firebaseSignOut() {
  signOut(auth);
}

function useUser() {
  const [user, setUser] = useState<User | null>();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return user;
}

export { firebaseSignIn as signIn, firebaseSignOut as signOut, useUser };
