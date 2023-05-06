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
import { MobileNav } from "./components/Navbar/MobileNav/MobileNav";
import { SignIn } from "./pages/SignIn/SignIn"
import { Footer } from "./components/Footer/Footer";



export const ApiDataContext = createContext(); // Define the context outside the component

function App() {

  const [isShown, setIsShown] = useState(true);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsShown(false);
      } else {
        setIsShown(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // }
  }, [])


  return (
    <ApiContextProvider>{/* Use the context here */}
      {isShown ? <Navbar /> : <MobileNav />}
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
      <Footer />
    </ApiContextProvider>

  );
}

export default App;