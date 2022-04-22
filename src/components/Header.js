import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { GiSpotedFlower } from 'react-icons/gi';
import SearchBar from './SearchBar';
import Login from './Login';
import { Navbar, Nav, Container, Form, FormControl, Button, Offcanvas, NavDropdown, Modal } from 'react-bootstrap';


const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className='menu'>
            <div className='container'>
                <nav className='menu_nav'>
                    <ul className='menu_ul'>
                        <li className='menu_li'>
                            <Link to="/" className='menu_link'><GiSpotedFlower />Home</Link>
                        </li>
                        <li className='menu_li'>
                            <Link to="/about" className='menu_link'><GiSpotedFlower />About</Link>
                        </li>
                        <li className='menu_li'>
                            <Login />
                        </li>
                    </ul>
                </nav>
                <SearchBar />

            </div>

            <Navbar className='menu_nav_dropdown' variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link to="/" className='menu_link'><GiSpotedFlower />Home</Nav.Link>
                                <Nav.Link to="/About" className='menu_link'><GiSpotedFlower />About</Nav.Link>
                                <button className='menu_link' variant="primary" onClick={handleShow}><GiSpotedFlower />Login</button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Login</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div>
                                            <form className="modal_form">
                                                <div className="form-group">
                                                    <label for="username">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="password">Password</label>
                                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Salvar Login</label>
                                                </div>
                                                <div className='modal_buttons'>
                                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                            </Nav>
                            <SearchBar />
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </header>

    )


}
export default Header;