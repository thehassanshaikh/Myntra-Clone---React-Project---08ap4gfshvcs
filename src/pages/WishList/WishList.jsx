import { ApiContext } from "../../components/Context/ApiContext";
import { useContext, useEffect } from "react";
import "./WishList.css";

export const WishList = () => {

    const { wishlist } = useContext(ApiContext);

    useEffect(() => {

    }, [])

    console.log(wishlist);

    return (
        <>
        <h2 className="wish-heading">My Wishlist</h2>
            <div className="wishlist-container">
                
                {
                    wishlist.map(item => (
                        <div className="wish-product-con">
                            <img src={item.image} alt="" srcset="" />
                            <div className="wish-title">
                                <h4>{item.title}</h4>
                            </div>
                            <button>Add to cart</button>
                        </div>

                    ))
                }

            </div>

        </>
    )
}