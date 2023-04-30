import "./MobileNav.css"
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsBookmarks } from "react-icons/bs";


import { useNavigate } from "react-router";

export const MobileNav = () => {

    const navigate = useNavigate();

    return (
        <section className="mobile-header">
            <div className="m-header-container">
                <div className="m-menu-container">
                    <HiMenu />
                    <img className="logo" onClick={() => navigate("/")} src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_-400x225.png" alt="Myntra logo" />
                </div>
                <div className="carts-icon-container">
                    <ul className="m-accounts-items">
                        <li className="m-account-item"><HiOutlineSearch /></li>
                        <li className="m-account-item"><BsBookmarks /></li>
                        <li className="m-account-item"><IoBagHandleOutline /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}   