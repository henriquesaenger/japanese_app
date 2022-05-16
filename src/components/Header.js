import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { GiSpotedFlower } from 'react-icons/gi';
import SearchBar from './SearchBar';
import Login from './Login';
import { Navbar, Nav, Container, Form, FormControl, Button, Offcanvas, NavDropdown, Modal } from 'react-bootstrap';
import styled from 'styled-components';


const Menu= styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: transparent;
    height: 5vh;
    align-items: center;
    width: 100%;

    & ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-top: 0;
        margin-bottom: 0;
    }

    & li{
        margin:15px;
        justify-content: center;
        list-style: none;
        width: fit-content;
    }

    & button{
        display: flex;
        flex-direction: row;
        margin-right: 10px;
        text-decoration: none;
        color: antiquewhite;
        align-content: center;
        font-size: larger;
        font-weight: bolder;
        font-size: 24px;
        background-color: transparent;
        border:none;
    }

    & button:hover{
        color:#A80B0B;
        transition: color 0.5s;
    }

    & a{
        display: flex;
        flex-direction: row;
        margin-right: 10px;
        text-decoration: none;
        color: antiquewhite;
        align-content: center;
        font-size: larger;
        font-weight: bolder;
        font-size: 24px;
        background-color: transparent;
        border:none;
    }

    & a:hover{
        color:#A80B0B;
        transition: color 0.5s;
    }

    .container{
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .menu_nav{
        width: 100%;
        
        justify-content: space-between;
    }
    
    .menu_nav_links{
        display: flex;
        flex-direction: row;
    }
    
    .menu_link_nav{
        text-align: center;
        color: #0d6efd;
        align-self: flex-start;
        padding: 0px;
        padding: 0.5rem 0rem 1rem;
        border: none;
        background-color: transparent;
    }

    @media screen and (min-width: 991px){
    
        .navbar {
            display: none !important;
        }

        
        
    }

    @media screen and (max-width: 991px){
        .container{
            display: none;
        }

        .navbar_collapse{
            color: #75a1cd;
        }
        .navbar{
            margin-top: 20px;
        }
        .button.navbar-toggler.collapsed{
            border: solid;
        }
    }

    
`;

const Nav_button= styled.button`
    text-align: center;
    color: #0d6efd;
    align-self: flex-start;
    padding: 0px;
    padding: 0.5rem 0rem 1rem;
    border: none;
    background-color: transparent;
`;


const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Menu>
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
                                <Nav.Link to="/" className='menu_link_nav'><GiSpotedFlower />Home</Nav.Link>
                                <Nav.Link to="/About" className='menu_link_nav'><GiSpotedFlower />About</Nav.Link>
                                <Nav_button variant="primary" onClick={handleShow}><GiSpotedFlower />Login</Nav_button>
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

        </Menu>

    )


}
export default Header;