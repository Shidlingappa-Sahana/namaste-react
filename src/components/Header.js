import { LOGO_URL } from "../util/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../util/useOnlineStatus"

export const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus()
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg'>
            <div className='logo-container'>
                <img className='w-40' src={LOGO_URL}></img>
            </div>
            <div className='flex items-center'>
                <ul className="flex m-4 p-2">
                    <li className="px-2">Online Status:{onlineStatus ? '✅' : '🔴'}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="contact">Contact Us</Link></li>
                    <li className="px-2"><Link to ='/grocery'>Grocery</Link></li>
                    <li className="px-2">Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")                        
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}