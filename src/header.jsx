import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from  "./assets/pumalogo3.png";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className="w-full bg-black text-white items-center">
                <div className="container">
                    <div className="row">
                    <div className="bars"><FaBars /></div>
                <div className="search"><button className="flex"><FaMagnifyingGlass/>SEARCH</button></div>
                <div className="logo"> <img src={logo} alt="" width={"50px"} /></div>
                <div className="cart"><MdAccountCircle /><FaShoppingCart /></div>
                    </div>
                </div>
               
               
            </header>

        </>
    )
}
export default Header;