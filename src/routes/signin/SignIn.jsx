import { getRedirectResult } from 'firebase/auth';
import React, { useEffect } from 'react'
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGooleRedirect
} from '../../utils/firebase/firebase';

const SignIn = () => {

    // useEffect( async () =>{
    //     const response = await getRedirectResult(auth)
    //     console.log(response)
    // }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    //   const logGoogleRedirectUser = async () => {
    //     const { user } = await signInWithGooleRedirect();
    //     console.log(user)
    //   };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGooleRedirect}>Sign in with Google Redirect</button>
        </div>
    );
};

export default SignIn