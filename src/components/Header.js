import { LOGO_URL } from "../utils/constants";
import {  useState, lazy, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header= () =>{
    const [btnReact,setBtnReact]= useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser} =useContext(UserContext);
    const cart=useSelector((store)=>store.cart.items);
    console.log(cart);
    return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
        <div className="w-40">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="flex ">
            <ul className="flex m-4 p-4 ">
                <li className="px-4 pt-4">
                    Online Status : {onlineStatus === true ? '🟢' : '🔴'}
                </li>
                <li className="px-4 pt-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 pt-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4 pt-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4 pt-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 pt-4 font-bold">
                    <Link to="/cart">Cart - {cart.length}</Link>
                </li>
                <button className="px-4 items-centre" onClick={()=>
                btnReact==="Login"?setBtnReact("Logout"):setBtnReact("Login")
                }>{btnReact}</button>
                <li className="px-4 pt-4 font-bold">
                    <Link>{loggedInUser}</Link>
                </li>
            </ul>
        </div>
    </div>)
};

export default Header;