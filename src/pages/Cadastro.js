import react from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {FloatingLabel, Form} from 'react-bootstrap';
import styled from 'styled-components';


const Container_cadastro= styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
`;

const Cadastro_infos= styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    width: 80%;
    align-self: center;
    border-radius: 15px;

    & form{
        text-align: -webkit-center;
    }

    & button{
        margin-bottom: 30px;
    }

    .form-floating{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 60%;
    }

`;


const Cadastro = () => {
    return (
        <Container_cadastro>
            <Header />
            <Cadastro_infos>
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
            </Cadastro_infos>
            <Footer />

        </Container_cadastro>
    )
}



export default Cadastro;