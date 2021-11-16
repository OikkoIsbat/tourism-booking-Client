import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                sessionStorage.setItem("email", result.user.email);
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})

            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;

    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;