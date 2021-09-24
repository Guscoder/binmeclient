import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import mainLogo from "../binme2.png";
import "./navmenu.css";

const NavMenu = () => {
  return (
    <>
      <Navbar className='p-2' bg='dark' expand='lg' variant='dark'>
        <Navbar.Brand href='#home'>
          <img className='mainLogo' src={mainLogo} alt='BinMe!' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/viewbin'>
              <Nav.Link>View Bin</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/createbin'>
              <Nav.Link>Create Bin</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavMenu;
