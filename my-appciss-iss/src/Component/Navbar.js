import React from 'react'
// import islogo from '../Assets/islogo.jpeg';
// import {  NavLink } from 'react-router-dom';
import '../CSS/Nav.css';

//Import Boostrap and CSS
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';  




// const Navbar = () => {
//   return (
//  <>
//  <header>
//   <div className='container container-flex'>
//     <div className='cisslogo'>
//      <img className='logo' src={islogo} alt='logo' /> 
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



function FillExample() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export function JustifiedExample() {
  return(
    <FillExample/>
  );
}



function herosection() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
  

}
export default herosection;

