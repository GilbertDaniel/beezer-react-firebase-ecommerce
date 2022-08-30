import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBfMS_DWdC9fT-Volg295c3MLb4XqEkk4I",
    authDomain: "beezer-react-app-db.firebaseapp.com",
    projectId: "beezer-react-app-db",
    storageBucket: "beezer-react-app-db.appspot.com",
    messagingSenderId: "646979238849",
    appId: "1:646979238849:web:1eba93373eb22e841b0d40"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);