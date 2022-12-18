import React, { useContext } from 'react';
import './Header.css';
import logo from '../../../assets/images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(err => console.error(err));
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container className='py-1'>
                <Link to="/" className="navbar-brand">
                    <div className='d-flex align-items-center brand'>
                        <img src={logo} alt="website-logo" />
                        <p className='m-0 fw-semibold'>Emmy's <br />Consultancy</p>
                    </div>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="links" to="/">Home</NavLink>
                        <NavLink className="links" to="/blogs">Blogs</NavLink>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav className='align-items-center'>
                        {
                            user?.uid ?
                                <>
                                    <Button onClick={handleLogOut} variant='light'>Log out</Button>
                                    <div className='image-container' title={user?.displayName || "Name Not Found"}>
                                        {
                                            user?.photoURL ?
                                                <Image style={{ width: "40px", height: "40px" }} src={user.photoURL} alt="profile-pic" roundedCircle />
                                                :
                                                <FaUserAlt />
                                        }
                                    </div>
                                </>
                                :
                                <>
                                    <NavLink className="links" to="/login">Login</NavLink>
                                    <NavLink className="links" to="/signup">Sign up</NavLink>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;