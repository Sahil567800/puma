import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"
import paymentImg from "./assets/payment.png"
import logo from "./assets/pumalogo3.png";
import indianFlag from "./assets/indian flag.png"
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row margin-auto paddingTB25 borderBottom">
                        <div className="list">
                            <h3>SUPPORT</h3>
                            <ul>
                                <li>Contact us</li>
                                <li>Promotions & Sale</li>
                                <li>Track Order</li>
                                <li>Shoe Care</li>
                                <li>Tech Glossary</li>
                                <li>Initiate Return / Exchange</li>
                                <li>Cookie Settings</li>
                            </ul>
                        </div>
                        <div className="ulist">
                            <ul>
                                <li>FAQs</li>
                                <li>My Account</li>
                                <li>Exchange & Return Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Sneakers</li>
                            </ul>

                        </div>
                        <div className="list">
                            <h3>ABOUT</h3>
                            <ul>
                                <li>Company</li>
                                <li>Corporate News</li>
                                <li>Press Center</li>
                                <li>Investors</li>
                                <li>Sustainability</li>
                                <li>Careers</li>
                                <li>Store Locator</li>
                                <li>PUMA Articles</li>
                            </ul>
                        </div>
                        <div className="uptoDate">
                            <h3>STAY UPTO DATE</h3>
                            <ul>
                                <li> <FaFacebook /></li>
                                <li><FaYoutube /></li>
                                <li><FaInstagram /></li>
                                <li><FaPinterest /></li>
                                <li><FaTwitter /></li>
                            </ul>
                            <h3>EXPLORE</h3>
                            <ul>
                                <li><div className="fpuma"><img src={logo} alt="" /><h4>APP</h4></div></li>
                                <li><div className="fpuma"><img src={logo} alt="" /><h4>APP</h4></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row paddingTB25">
                        <div className="cards"><img src={paymentImg} alt="" /></div>
                        <div className="india"><button><img src={indianFlag} alt="india" />INDIA</button></div>

                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;