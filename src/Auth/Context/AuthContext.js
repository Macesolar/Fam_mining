import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) { 
    const [currentUser, setCurrentUser] = useState() 
    const [loading, setLoading] = useState(true)

    function signup(email, passsword) {
        return auth.createUserWithEmailAndPassword(email, passsword)
    }

    function login(email, passsword) {
        return auth.signInWithEmailAndPassword(email, passsword)
    }

    // function signInWithGoogle() {
    //     const provider = new GoogleAuthProvider()
    //     return auth.signInWithPopup(provider)
    // }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    function data () {
        return db.collection('mine')
        .doc(currentUser.uid)
        .set({
            earnings: 0,
            time: 0
        });
    }
    //.collection("Activities").document("acitivity1").set(data)
    
    function createProfile(firstName, lastName, DOB, Adress, State, Country, Gender, Phone, Occupation, Security, Answer, Purpose) {
                data()
        return db.collection(`contact`).doc(currentUser.uid).set({
            firstName, 
            lastName, 
            DOB, 
            Adress, 
            State, 
            Country, 
            Gender, 
            Phone, 
            Occupation, 
            Security, 
            Answer, 
            Purpose,
            withdrawTotal: 0,
            date: new Date()
        }) 
    }

    function withdraw(firstName, lastName, email, wallet, app, type, earning) {
        return db.collection('request')
            .doc(currentUser.uid)
            .set({
                firstName,
                lastName,
                email,
                wallet,
                app,
                type,
                earning,
                date: new Date()
            })
    }

    function deposit (firstName, lastName, email, pay ) {
        return db.collection('receive')
        .doc(currentUser.uid)
        .set({
            firstName,
            lastName,
            email,
            pay,
            date: new Date()
        });
        
    }

    

    

    
    const value = {
        currentUser,
        signup,
        createProfile,
        login,
        withdraw,
        deposit,
        resetPassword,
        logout
    }

    return (
        <AuthContext.Provider value= {value}>
          {!loading && children}  
        </AuthContext.Provider>
    )
}
