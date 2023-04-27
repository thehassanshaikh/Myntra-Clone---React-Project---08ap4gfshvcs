import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import { Navbar } from "./components/Navbar/Navbar";
import { Products } from "./components/Products/products";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import { Cart } from "./components/Cart/Cart";
import ApiContextProvider from "./components/Context/ApiContext";
import Home from "./components/Home/Home";


export const ApiDataContext = createContext(); // Define the context outside the component

function App() {




  return (
    <ApiContextProvider>{/* Use the context here */}
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ApiContextProvider>

  );
}

export default App;