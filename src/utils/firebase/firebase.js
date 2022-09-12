import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    doc,
    getDoc,
    setDoc,
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBfMS_DWdC9fT-Volg295c3MLb4XqEkk4I",
    authDomain: "beezer-react-app-db.firebaseapp.com",
    projectId: "beezer-react-app-db",
    storageBucket: "beezer-react-app-db.appspot.com",
    messagingSenderId: "646979238849",
    appId: "1:646979238849:web:1eba93373eb22e841b0d40"
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGooleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    // if user data does not exit
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // create / set the document with the data from userAuth in the collection
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    // if user data exit return userData
    return userDocRef;
};