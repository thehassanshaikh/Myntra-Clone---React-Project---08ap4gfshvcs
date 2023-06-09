import "./Navbar.css"
import { IoPersonOutline, IoBagHandleOutline } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../Context/ApiContext";
import { SubMenu } from "../SubMenu/SubMenu";
import { Link } from "react-router-dom";

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

    // function for navitgate the user on product page 
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
                       <Link to={"/products"}><li className="nav-item nav-1">Men</li></Link>
                       <Link to={"/products"}><li className="nav-item nav-2">Women</li></Link>
                       <Link to={"/products"}><li className="nav-item nav-3">Kids</li></Link>
                       <Link to={"/products"}><li className="nav-item nav-4">Home & living</li></Link>
                       <Link to={"/products"}><li className="nav-item nav-5">Beauty</li></Link>
                       <Link to={"/products"}><li className="nav-item nav-6">Stdio</li></Link>
                    </ul>
                </nav>
                <div className="search-bar-container">
                    <input className="search-bar" type="text" value={sbar} onKeyDown={handleKeyDown} onChange={(e) => setSbar(e.target.value)} placeholder="Seach for porducts,Brands or more" />
                </div>
                <div className="account-item-container">
                    <ul className="accounts-items">
                        <li className="account-item" onClick={()=> navigate('/signin')}><IoPersonOutline /> Profile</li>
                        <li className="account-item" onClick={()=> navigate('/wishlist')}><BsBookmarks />Wishlist</li>
                        <li className="account-item" onClick={()=> navigate('/cart')}><IoBagHandleOutline />Cart</li>
                    </ul>
                </div>

            </header>
        </>
    )
}