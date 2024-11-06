import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"
import paymentImg from "./assets/payment.png"
import logo from "./assets/pumalogo3.png";
import indianFlag from "./assets/indian flag.png"
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { Ul } from "./ul";

const Footer = () => {
    const [active, setActive] = useState(undefined);
    const handleClick = () => {
        setActive(!active)
    }
   
    return (
        <>
            <footer>
                <div className="continer">
                    <div className="raw margin-auto paddingTB25 borderBottom column">
                        <div className={`list `}>
                            <div className="heading" onClick={() => handleClick()}> <h3>SUPPORT </h3><FaAngleDown /></div>
                            <Ul className={`${!active?"none":"active:"}`}>
                                <li>Contact us</li>
                                <li>Promotions & Sale</li>
                                <li>Track Order</li>
                                <li>Shoe Care</li>
                                <li>Tech Glossary</li>
                                <li>Initiate Return / Exchange</li>
                                <li>Cookie Settings</li>
                            </Ul>
                        </div>
                        <div className={`ulist`}>
                            <Ul className={`${!active?"none":"active:"}`}>
                                <li>FAQs</li>
                                <li>My Account</li>
                                <li>Exchange & Return Policy</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Sneakers</li>
                            </Ul>

                        </div>
                        <div className="list">
                            <div className="heading "onClick={() => handleClick()}><h3>ABOUT </h3><FaAngleDown /></div>
                            <Ul className={`${!active?"none":"active:"}`}>
                                <li>Company</li>
                                <li>Corporate News</li>
                                <li>Press Center</li>
                                <li>Investors</li>
                                <li>Sustainability</li>
                                <li>Careers</li>
                                <li>Store Locator</li>
                                <li>PUMA Articles</li>
                            </Ul>
                        </div>
                        <div className="uptoDate">
                            <div className="heading" onClick={() => handleClick()}> <h3>STAY UPTO DATE </h3><FaAngleDown /></div>
                            <Ul className={`${!active?"none":"active:"}`}>
                                <li> <FaFacebook /></li>
                                <li><FaYoutube /></li>
                                <li><FaInstagram /></li>
                                <li><FaPinterest /></li>
                                <li><FaTwitter /></li>
                            </Ul>
                            <div className="heading" onClick={() => handleClick()}><h3>EXPLORE </h3><FaAngleDown /></div>
                            <Ul className={`${!active?"none":"active:"}`}>
                                <li><div className="fpuma"><img src={logo} alt="" /><h4>APP</h4></div></li>
                                <li><div className="fpuma"><img src={logo} alt="" /><h4>APP</h4></div></li>
                            </Ul>
                        </div>
                    </div>
                    <div className="raw  column">
                        <div className="cards paddingTB25"><img src={paymentImg} alt="" /></div>
                        <div className="india paddingTB25"><button><img src={indianFlag} alt="india" />INDIA</button></div>

                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;