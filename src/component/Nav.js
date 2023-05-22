import React,{useState} from "react";
import './style.css';
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Nav=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    
    return(
        <div>
            <div className="nav-bar">
            <img className='logo' alt='imagees'src={LOGO}/>
        <div className="nav">
        <ul >
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li>Cart</li>

        </ul>
        </div>
{
    isLoggedIn?<button onClick={()=>{setIsLoggedIn(false)}}>Logout</button>:<button onClick={()=>{setIsLoggedIn(true)}}>Login</button>

}

        </div>
        </div>
    )
    }

export default Nav;