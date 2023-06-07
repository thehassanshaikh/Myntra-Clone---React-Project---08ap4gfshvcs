import { ApiContext } from "../../components/Context/ApiContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WishList.css";

export const WishList = () => {

    const { wishlist } = useContext(ApiContext);

    useEffect(() => {

    }, [])

    console.log(wishlist);

    return (
        <>
        <section className="wishList-section">
            <h2 className="wish-heading">My Wishlist</h2>
           {wishlist.lenght > 0 ? console.log("true") : console.log("false")}
           
            <div className="products-container">
                    {wishlist.map(item => (
                        <div className="product-grid">
                            <div className="pro-img-con">
                                <img src={item.image} alt="product image"
                                    className="pro-img" />
                            </div>
                            <div className="product-ditails">
                                <h3 className="product-brand">{item.category}</h3>
                                <h3 className="product-title">{item.title}</h3>
                                <h3 className="product-price">₹ {item.price}</h3>
                                <Link to={`/product-details/${item.id}`} key={item.id}> <button className="product-button"><a href="#">View More</a></button></Link>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
        </>
    )
}