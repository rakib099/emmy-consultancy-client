import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // user state observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("auth state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();

    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        providerLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;