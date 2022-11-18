 import React from 'react'
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {NavLink,Link} from 'react-router-dom'
 export default function nav() {
   return (
 
     
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
    <Container >
      <Navbar.Brand href="" className='text-warning'>Nef Aydınlatma Enerji </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto ">
         
        <Nav.Link as={Link} to="/" >Anasayfa</Nav.Link>
            <Nav.Link as={Link} to="/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link as={Link} to="/urunlerimiz">Ürünlerimiz</Nav.Link>
             <Nav.Link as={Link} to="/iletisim"  >İletişim  </Nav.Link>
             <Nav.Link as={Link} to="/contact"  >contact  </Nav.Link>

        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
   )
 }
 