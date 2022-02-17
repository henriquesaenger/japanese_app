import { React, useState } from 'react';
import { GiSpotedFlower } from 'react-icons/gi';
import Modal from 'react-bootstrap/Modal';
import "./Login.css";


const Login = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
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
                            <div className='modal_buttons'>
                                <button variant="secondary" className="btn btn-primary" onClick={handleClose}>Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )

}


export default Login;