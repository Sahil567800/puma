import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "./assets/pumalogo3.png";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
    const [searchToggle, setSearch] = useState(false)
    const [inputChange, setInputChange] = useState("")
    const [isnav,setNav] = useState(false)
    let bars = <FaBars/>;
    if(isnav===true){
        bars = <FaAngleUp/>
    }
    const handleNav =()=>{
        setNav(!isnav)
    }
    const handleChange = (e) => {
        setInputChange(e.target.value)
    }
    const toggleSearch = () => {
        setSearch(true)
    }
    let search;
    let mSearch;
    if (!searchToggle) {
        search = <div className="search"><button className="flex" onClick={() => toggleSearch()}>SEARCH</button></div>
        mSearch = <div className="m-search " onClick={()=>toggleSearch()}><FaMagnifyingGlass /></div> 
    }
    else {
        search = <div className="search-bar">
            <input type="text" placeholder="ENTER PRODUCT NAME" value={inputChange} onChange={handleChange} />
            <button><FaMagnifyingGlass /></button>
        </div>
        mSearch = <div className="mSearch-bar">
            <input type="text" placeholder="ENTER PRODUCT NAME" value={inputChange} onChange={handleChange} />
            <button><FaMagnifyingGlass /></button>
        </div>
        
    }
  
    return (
        <>
            <header className="w-full bg-black text-white items-center">
                <div className="continer">
                    <div className="raw">
                        <div className="bars"  onClick={handleNav}>{bars}</div>
                        {search}
                        {mSearch}
                        <div className="logo"> <img src={logo} alt="" width={"50px"} /></div>
                        <div className="cart"><MdAccountCircle /><FaShoppingCart /></div>
                    </div>
                    <div className="raw">
                        <nav className={`${!isnav?"None":"flex"}`}>
                        <li><Link to="/"/>Home</li>
                        <li><Link to="/BuySec"/>About</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Contact uS</li>
                        </nav>
                        
                    </div>
                </div>


            </header>

        </>
    )
}
export default Header;