import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Rodape = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #41A5F5;
    width: 100%;

    & button{
        border: none;
        padding: 7px;
        margin: 10px;
        font-size: 15px;
        color: aliceblue;
        background-color: #41A5F5;
        width: fit-content;
        height: fit-content;
    }

    & a{
        border: none;
        padding: 7px;
        margin: 10px;
        font-size: 15px;
        color: aliceblue;
        background-color: #41A5F5;
        width: fit-content;
        height: fit-content;
        text-decoration: none;
    }

    & p{
        margin: 10px;
        font-size: 15px;
        color: aliceblue;
    }

    @media screen and (max-width: 991px){
        flex-direction: column;
    }
`;

const Rodape_container = styled.div`
    &.primeiro{
        display: flex;
        flex-direction: column;
        margin: 15px;
        border-right: solid 2px;
        border-color: black;
        width: 30%;
    }

    &.segundo{
        display: flex;
        flex-direction: column;
        margin: 15px;
        width: 30%;
    }

    @media screen and (max-width: 991px){
        &.primeiro{
            border-right: none;
            border-bottom: solid 2px;
            border-color: black;
            width: 100%;
            margin: 0px;
        }
        &.segundo{
            width: 100%;
            margin: 0px;
        }
    }
`;

const Footer = () => {

    return(
        <Rodape>
            <Rodape_container className="primeiro">
                <button>Níveis</button>
                <Link to="/about">Sobre nós</Link>
            </Rodape_container>
            <Rodape_container className="primeiro">
                <p>Rua da consolação, 0000</p>
                <p>Jundiaí, SP</p>
                <p>CEP: 00000-000</p>
            </Rodape_container>
            <Rodape_container className="segundo">
                <button>Suporte</button>
                <button>Política de privacidade</button>
                <button>Fale conosco</button>
            </Rodape_container>
        </Rodape>
    )
}




export default Footer;