import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.scss';
import conveyor from "../assets/products/conveyor.webp"
import motor from "../assets/products/motor.webp"

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="navbar d-flex justify-content-between fixed-top">
            <div className='nav-container-left'>
                <Navbar.Brand href="#home">
                    <div className="navlogo-container">
                        <img className='navlogo' src="./navlogo.png" alt='logo' />
                        <span className='navlogo-txt'>ROLLnDRIVE</span>
                    </div>
                </Navbar.Brand>
            </div>
            <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Products" id="products-dropdown" className="dropdown-hover">
                            <NavDropdown.Item href="#product1">
                                <img width={35} height={35} src={conveyor} alt="prod" />
                                <span style={{ padding: 8 }}>Conveyor Belt</span>
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#product2">
                                <img width={35} height={35} src={motor} alt="prod" />
                                <span style={{ padding: 8 }}>Custom Motor</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Support" id="support-dropdown" className="dropdown-hover">
                            <NavDropdown.Item href="#support1">Validate Your Product</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#support2">Get Product Specs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#careers">Careers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default MyNavbar;