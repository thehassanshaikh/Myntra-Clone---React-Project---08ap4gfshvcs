import './Footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <footer>
            <div className="shop-links">
                <p className='footer-list-title'>online Shopping</p>
                <ul>
                    <Link to={"/products"}><li className='footer-list-items'>Mens</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Womens</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Kids</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Home & Living</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Beauty</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Gift Card</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Myntra Insider</li></Link>
                </ul>
            </div>
            <div className="customer-policies">
                <p className='footer-list-title'>Customer Policies</p>
                <ul>
                    <Link to={"/products"}><li className='footer-list-items'>Contact Us</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>FAQ</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>T&C</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Terms Of Use</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Track Orders</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Shipping</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>cancellation</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Returns</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Privacy Policy</li></Link>
                    <Link to={"/products"}><li className='footer-list-items'>Grievance Officer</li></Link>
                </ul>
            </div>
            <div className="app-expricence">
                <p className='footer-list-title'>EXPERIENCE MYNTRA APP ON MOBILE</p>
                <div className="footer-img-con">
                    <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                    <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
                </div>
            </div>
            <div className="promises">
                <div className="100-og footer-flx">
                    <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
                    <p><strong>100% ORIGINAL guarantee</strong> for <br /> all products at myntra.com</p>
                </div>
                <div className="footer-rtn footer-flx">
                    <img src=" https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" />
                    <p><strong>Return within 30days </strong>of <br /> receiving your order</p>
                </div>
            </div>
        </footer>
    )
}