import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Unavbar.scss";

function Unavbar() {

    return (
        <Navbar
            fixed="top"
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary myNavbar"
        >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/navlogo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    &nbsp; RollNDrive
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">Products</Nav.Link>
                        <Nav.Link href="/">Team</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Signed in As: SK027" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Dash Board</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            <Button variant="primary">Logout</Button>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link
                            href="/"
                        >
                            <div className="profile">
                            <i class="fa-solid fa-user"></i>
                            </div>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Unavbar;
