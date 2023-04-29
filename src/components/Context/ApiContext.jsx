import React, { Children } from 'react'
import { createContext, useState, useEffect } from 'react'


export const ApiContext = createContext()

export default function ApiContextProvider({ children }) {
    const [apiData, setApiData] = useState([]);
    const [getCart, setCart] = useState([]);
    const [productsData, setProductData] = useState([])


    useEffect(() => {
        const getApiDetails = async () => {
            let response = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
            response = await response.json();
            setApiData(response);
            setProductData(response);
        }

        getApiDetails()
    }, []);

    return (
        <ApiContext.Provider value={{ apiData, setApiData, setCart, getCart, productsData }}>
            {children}
        </ApiContext.Provider>
    )
}
