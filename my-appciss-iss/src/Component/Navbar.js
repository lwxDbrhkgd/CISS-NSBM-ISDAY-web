import React from 'react'
// import islogo from '../Assets/islogo.jpeg';
// import {  NavLink } from 'react-router-dom';
import '../CSS/Nav.css';
import'../CSS/style.css';

//Import Boostrap and CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import islogo from '../Assets/islogo.jpeg';














// const Navbar = () => {
//   return (
//  <>
//  <header>
//   <div className='container container-flex'>
//     <div className='cisslogo'>
//   
//     </div>
//     <div className='navbar'>
//       <NavLink  to="/" className="listitem">Home</NavLink>
//       <NavLink to="/Speakers"className="listitem">Speakers</NavLink>
//       <NavLink to="/Sponcers"className="listitem">Sponcer</NavLink>
//       <NavLink to="/Team"className="listitem">Team</NavLink>
//       <NavLink to="/faq"className="listitem">FAQ</NavLink>
//       <div className='register'>
//       <button className='registerbtn'><NavLink to="../PHP/index.php">Register</NavLink></button>
//       </div>
//       </div>
//   </div>
//  </header>
//  </>
//   )
// }
// export default Navbar;



function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
   
 
   
    
    <div className='container container-flex'>
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <div className='cisslogo'>
          <img className='logo' src={islogo} alt='logo' /> 
          </div>
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
        
         
            


      



     
         
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
    </div>
   
           

  );
  
}
export default NavBar;


