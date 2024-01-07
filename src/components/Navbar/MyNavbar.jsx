import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.scss';
import motor from "../../assets/products/motor.webp"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const MyNavbar = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const showDropdown1 = () => {
        setShow1(!show1);
    }
    const hideDropdown1 = () => {
        setShow1(false);
    }
    const showDropdown2 = () => {
        setShow2(!show2);
    }
    const hideDropdown2 = () => {
        setShow2(false);
    }
    const location = useLocation();
    const [activeKey, setActiveKey] = useState("");
    useEffect(() => {
        setActiveKey(location.pathname);
    }, [location]);

    return (
        <Navbar bg="light" expand="lg" className="navbar d-flex justify-content-between fixed-top">
            <Navbar.Brand href="#home">
                <div className="navlogo-container">
                    <img className='navlogo' src="./navlogo.png" alt='logo' />
                    <span className='navlogo-txt'>RollnDrive</span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={activeKey}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown
                        id="collasible-nav-dropdown"
                        show={show1}
                        onMouseEnter={showDropdown1}
                        onMouseLeave={hideDropdown1}
                        title="Products"
                    >
                        <NavDropdown.Item href="/products:mdr">
                            <img width={35} height={35} src={motor} alt="prod" />
                            <span style={{ padding: 8 }}>MDR</span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/products:brushlessmotor">
                            <img width={35} height={35} src={motor} alt="prod" />
                            <span style={{ padding: 8 }}>Brush-less Motor</span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/products:gearedmotor">
                            <img width={35} height={35} src={motor} alt="prod" />
                            <span style={{ padding: 8 }}>Geared Motor</span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/products:customized-geared-motors">
                            <img width={35} height={35} src={motor} alt="prod" />
                            <span style={{ padding: 8 }}>Customized geared Motors</span>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/products:motorcontroller">
                            <img width={35} height={35} src={motor} alt="prod" />
                            <span style={{ padding: 8 }}>Motor Controller</span>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                        title="Support"
                        id="support-dropdown"
                        show={show2}
                        onMouseEnter={showDropdown2}
                        onMouseLeave={hideDropdown2}
                    >
                        <NavDropdown.Item href="/support:validate"><i className="icons fa-regular fa-square-check"></i> Validate Your Product</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/teams">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;