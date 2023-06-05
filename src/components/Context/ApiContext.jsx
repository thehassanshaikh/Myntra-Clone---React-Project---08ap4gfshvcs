import React, { Children, useContext } from 'react'
import { createContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';



export const ApiContext = createContext()

export default function ApiContextProvider({ children }) {
    const [apiData, setApiData] = useState([]);
    const [getCart, setCart] = useState([]);
    const [productsData, setProductData] = useState([])
    const [wishlist, setWishlist] = useState([])


    useEffect(() => {
        const getApiDetails = async () => {
            let response = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
            response = await response.json();
            setApiData(response);
            setProductData(response);
        }

        getApiDetails()
    }, []);

    const googleSingIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    return (
        <ApiContext.Provider value={{ apiData, setApiData, setCart, getCart, productsData, googleSingIn, wishlist, setWishlist }}>
            {children}
        </ApiContext.Provider>
    );


}

export const UserAuth = () => {
    return useContext(ApiContextProvider)
};