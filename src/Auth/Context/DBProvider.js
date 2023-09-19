import React, { useState, useEffect, useContext } from 'react';
import { db } from '../../Firebase';
import { useAuth } from './AuthContext';


const DBContext = React.createContext()

export function DataBase() {
    return useContext(DBContext)
}


export function DBProvider({ children }) {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState('');
    const [error, setError] = useState('');



    useEffect(() => {

        return db.collection('contact')
            .doc(currentUser.uid)
            .onSnapshot((snapshot) => {
                if (snapshot.exists) {
                    setInfo(snapshot.data());
                    setError('');
                    setLoading(false);
                } else {
                    setError('Check Network connection!');
                    setLoading(true);
                }


            });


    });

    



    const value = {
        info,
        error
    };

    return (
        <DBContext.Provider value={value}>
            {!loading && children}
        </DBContext.Provider>
    );
}
