import React, { useEffect, useState } from 'react';
import {db} from '../firebase-config'

const useData = () => {
    let [requests, setRequests] = useState([])
    useEffect(() => {
        db
        .collection('requests')
        .onSnapshot((snapshot)=>{
            const petition = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setRequests(petition)
        })
    },[])
    return requests
}
 
export default useData;