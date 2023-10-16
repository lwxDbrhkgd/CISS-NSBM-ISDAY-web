import React from 'react'
import islogo from '../Assets/islogo.jpeg';
import {  NavLink } from 'react-router-dom';
import '../CSS/Nav.css';


const Navbar = () => {
  return (
 <>
 <header>
  <div className='container container-flex'>
    <div className='cisslogo'>
     <img className='logo' src={islogo} alt='logo' /> 
    </div>
    <div className='navbar'>
      <NavLink  to="/" className="listitem">Home</NavLink>
      <NavLink to="/Speakers"className="listitem">Speakers</NavLink>
      <NavLink to="/Sponcers"className="listitem">Sponcer</NavLink>
      <NavLink to="/Team"className="listitem">Team</NavLink>
      <NavLink to="/faq"className="listitem">FAQ</NavLink>
      <div className='register'>
      <button className='registerbtn'><NavLink to="../PHP/index.php">Register</NavLink></button>
      </div>
      </div>
  </div>
 </header>
 </>
  )
}
export default Navbar;