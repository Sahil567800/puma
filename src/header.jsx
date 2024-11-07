import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "./assets/pumalogo3.png";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
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
        mSearch =<FaMagnifyingGlass/>
    }
    else {
        search = <div className="search-bar">
            <input type="text" placeholder="ENTER PRODUCT NAME" value={inputChange} onChange={handleChange} />
            <button><FaMagnifyingGlass /></button>
        </div>
        mSearch = 
        <input type="text" placeholder="ENTER PRODUCT NAME" value={inputChange} onChange={handleChange} />
    }
  
    return (
        <>
            <header className="w-full bg-black text-white items-center">
                <div className="continer">
                    <div className="raw">
                        <div className="bars"  onClick={handleNav}>{bars}</div>
                        {search}
                        <div className="m-search" onClick={()=>handleChange()}>{mSearch}</div>
                        <div className="logo"> <img src={logo} alt="" width={"50px"} /></div>
                        <div className="cart"><MdAccountCircle /><FaShoppingCart /></div>
                    </div>
                    <div className="raw">
                        <nav className={`${!isnav?"None":"flex"}`}>
                        <li>Home</li>
                        <li>About</li>
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