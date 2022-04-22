import react from 'react';
import './Cadastro.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {FloatingLabel, Form} from 'react-bootstrap';



const Cadastro = () => {
    return (
        <div className='container_cadastro'>
            <Header />
            <div className='container_infos'>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <button variant="primary" className='btn btn-primary' type="submit">Cadastrar-se</button>
                </Form>
            </div>
            <Footer />

        </div>
    )
}



export default Cadastro;