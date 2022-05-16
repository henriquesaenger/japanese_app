import React from 'react';
import Cards from "../components/Cards";
import { GiTrophy } from 'react-icons/gi';
import Cartaz from "../components/Cartaz";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Forum from '../components/Forum';
import Notificacoes from '../components/Notificacoes';
import styled from 'styled-components';



const Homepage= styled.div`
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
    html,body {
        height: 100%;
        margin: 0;
    }

`;

const Barra_cards= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: fit-content;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;

const Trophy= styled.div`
    width:160px;
    height:200px;
    background-color: rgb(255, 255, 255, 0.85) !important;
    border-radius: 20px;
    text-align: center;
    
    .trophy{
        height: 85px;
        width: 50px;
    }

    @media screen and (max-width: 900px){
        align-self: center;
    }
`;

const Barra_info= styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;

    .caixa_forum{
        width: 40%;
    }
      
    .caixa_notificacoes{
        width: 40%;
    }
`;

const Home = () => {
    return(
        <Homepage>
            <Header />
            <Cartaz />
            <Barra_cards>
                <Trophy>
                    <GiTrophy className='trophy' />
                    <p>Troféis conquistados:</p>
                    <h1>(0 / 10)</h1> {/*quando colocar o sistema de usuário, puxar o numero de troféis*/}

                </Trophy>
                <Cards />
            </Barra_cards>
            <Barra_info>
                <div className='caixa_notificacoes'>
                    <Notificacoes />
                </div>
                <div className='caixa_forum'>
                    <Forum />
                </div>
            </Barra_info>
            <Footer />
        </Homepage>
    )
}

export default Home;