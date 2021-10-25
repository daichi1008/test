import React, { useState, useEffect } from "react";
import firebase from './config/firebase'


const AuthContext = React.createContext()

// privider=>　コンテキストで渡したい値を指定するもの
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser)

    }, [])


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
    AuthContext
}