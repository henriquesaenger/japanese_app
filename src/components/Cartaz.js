import React from "react";
import { Link } from 'react-router-dom';
import imagem from '../images/japanese_student.jpg';
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 500px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: none;


    @media screen and (min-width: 900px){

        

        display: flex;
        flex-direction: row;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        height: 500px;
        width: 100%;
        margin-top: 30px;
        margin-bottom: 40px;

    }
`;

const Cover_cart= styled.div`
    
    width: 100%;
    background-image: url(${imagem});
    background-position: center;
    background-size: cover;
    border-radius: none !important;
    margin-bottom: none;

    @media screen and (min-width: 900px){
        background-image: url(${imagem});
        background-size: cover;
        width: 65%;
        border-top-right-radius: 70px;
        border-bottom-right-radius: 70px;
            
    }
`;


const Cartaz_info= styled.div`

    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

& h1{
    color: #3b4545;
    margin-left: 20px;
    text-align: center;
    font-weight: bolder;
    font-size: 23px;
}

& p{
    width: 80%;
    text-align: center;
    align-self: center;
    font-weight: bold;
    font-size: 16px;
}

.cad{
    border: none;
    background-color: #41A5F5;
    color: aliceblue;
    font-size: 15px;
    width: fit-content;
    padding: 8px;
    align-self: center;
    border-radius: 10px;
}

    @media screen and (max-width: 900px){
        display: none;
    }

`;

const Cartaz_info_menor= styled.div`
    display: none;

    @media screen and (max-width: 900px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        margin-bottom: 40px;

        & h1{
            color: #3b4545;
            margin-left: 20px;
            text-align: center;
            font-weight: bolder;
            font-size: 20px;
            margin-top: 20px;
        }
        
        & p{
            width: 80%;
            text-align: center;
            align-self: center;
            font-weight: bold;
            font-size: 14px;
        }

        .cad{
            border: none;
            background-color: #41A5F5;
            color: aliceblue;
            font-size: 15px;
            width: fit-content;
            padding: 8px;
            align-self: center;
            border-radius: 10px;
            margin-bottom: 20px;
        }
    }
`;



const Cartaz = () => {

    return (
        <div className="cartaz-wrapper">
            <Container>
                <Cover_cart>

                </Cover_cart>
                <Cartaz_info>
                    <h1>Seja bem-vindo à plataforma de estudo Appanese</h1>
                    <p>Uma plataforma desenvolvida por um estudante com a missão de ajudar outros estudantes a suavizar sua caminhada rumo às provas de proficiência em japonês(JLPT- Japanese Language Proficiency Test), de uma forma descontraída.</p>
                    <Link to="/cadastro" className="btn btn-primary cad">Cadastrar</Link>
                </Cartaz_info>
            </Container>
            <Cartaz_info_menor>
                <h1>Seja bem-vindo à plataforma de estudo Appanese</h1>
                <p>Uma plataforma desenvolvida por um estudante com a missão de ajudar outros estudantes a suavizar sua caminhada rumo às provas de proficiência em japonês(JLPT- Japanese Language Proficiency Test), de uma forma descontraída.</p>
                <Link to="/cadastro" className="btn btn-primary cad">Cadastrar</Link>
            </Cartaz_info_menor>
        </div>

    )


}


export default Cartaz;