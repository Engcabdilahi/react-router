import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyle.css";
import { useState } from "react";
import {Link} from 'react-router-dom'



function Navbar() {
  
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div Name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <MdOutlineCastForEducation className="icon" />
          <h1>Tii<span>gsi</span></h1>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
         
          <li> <Link to='/'>Home</Link>  </li>
          <li> <Link to='/courses'>courses</Link>  </li>
          <li> <Link to='/footer'>Footer</Link>  </li>
         
        

          <button>sing in</button>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon1" /> : <FaTimes className="icon1" />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
