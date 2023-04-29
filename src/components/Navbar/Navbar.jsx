import "./Navbar.css"
import { IoPersonOutline, IoBagHandleOutline } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../Context/ApiContext";

export const Navbar = () => {

    const { apiData, setApiData, productsData } = useContext(ApiContext);



    const [sbar, setSbar] = useState("");

    const searchData = () => {
        const searchResult = productsData.filter((product) =>
            product.title.toLowerCase().includes(sbar.toLowerCase())
        );
        //    if(searchResult.length!== 0){
        //    }
        setApiData(searchResult);
    }

    useEffect(() => {
        searchData()
    }, [sbar])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate("/products");
        }
        console.log(event);
    }

    const navigate = useNavigate();
    return (
        <>
            <header>
                <div className="logo-container">
                    <img className="logo" onClick={() => navigate("/")} src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_-400x225.png" alt="Myntra logo" />
                </div>
                <nav className="nav-container">
                    <ul className="nav-items">
                        <li className="nav-item">Men</li>
                        <li className="nav-item">Women</li>
                        <li className="nav-item">Kids</li>
                        <li className="nav-item">Home & living</li>
                        <li className="nav-item">Stdio</li>
                    </ul>
                </nav>
                <div className="search-bar-container">
                    <input className="search-bar" type="text" value={sbar} onKeyDown={handleKeyDown} onChange={(e) => setSbar(e.target.value)} placeholder="Seach for porducts,Brands or more" />
                </div>
                <div className="account-item-container">
                    <ul className="accounts-items">
                        <li className="account-item"><IoPersonOutline /> Profile</li>
                        <li className="account-item"><BsBookmarks />Wishlist</li>
                        <li className="account-item"><IoBagHandleOutline /> Profile</li>

                    </ul>
                </div>

            </header>
        </>
    )
}