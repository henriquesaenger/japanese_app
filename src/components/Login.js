import { React, useContext, useState } from 'react';
import { GiSpotedFlower } from 'react-icons/gi';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Info_login_Provider from '../contexto/Info_login_Provider';


const Modal_buttons= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;


const Login = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const login_ctx= useContext(Info_login_Provider);


    const onLogin= () => {
        login_ctx.loginHandler();
        window.location.reload();
    }

    return (
        <div>
            <button className='menu_link' variant="primary" onClick={handleShow}><GiSpotedFlower />Login</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form className="modal_form" method='POST' action='/login/check'>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="text" className="form-control" id="username"  placeholder="Enter your username" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Salvar Login</label>
                            </div>
                            <Modal_buttons>
                                <Link to="/cadastro" className="btn btn-primary">Cadastrar</Link>
                                <button type="submit" onClick={onLogin} className="btn btn-primary">Entrar</button>
                            </Modal_buttons>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )

}


export default Login;