import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBarra = () => {
  return (
    <div>
      
      <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/login" style={{color: '#ec1a1a'}}>-Doce Mel-</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastros">Cadastros</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    

  </div>
  )
}

export default NavBarra