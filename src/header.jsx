import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import logo from "./assets/pumalogo3.png";
import { MdAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
    const [searchToggle,setSearch] = useState(false)
    const toggleSearch=()=>{
        setSearch(true)
    }
    let search;
    if (!searchToggle) {
        search = <div className="search"><button className="flex" onClick={()=>toggleSearch()}><FaMagnifyingGlass />SEARCH</button></div>
    }
    else {
        search = <div className="search-bar">
            <input type="text" placeholder="ENTER PRODUCT NAME" />
            <button><FaMagnifyingGlass /></button>
        </div>
    }
    return (
        <>
            <header className="w-full bg-black text-white items-center">
                <div className="continer">
                    <div className="raw">
                        <div className="bars"><FaBars /></div>
                        {search}
                        <div className="m-search"><FaMagnifyingGlass /></div>


                        <div className="logo"> <img src={logo} alt="" width={"50px"} /></div>
                        <div className="cart"><MdAccountCircle /><FaShoppingCart /></div>
                    </div>
                </div>


            </header>

        </>
    )
}
export default Header;