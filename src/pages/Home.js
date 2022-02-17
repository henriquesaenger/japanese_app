import React from 'react';
import './Home.css';
import Cards from "../components/Cards";
import { GiTrophy } from 'react-icons/gi';

const Home = () => {
    return(
        <div className='home'>
            <h1>Seja bem vindo!</h1>
            <div className='barra_top'>
                <div className='trophy_div'>
                    <GiTrophy className='trophy' />
                    <p>Troféis conquistados:</p>
                    <h1>(0 / 10)</h1>

                </div>
                <Cards />
            </div>
            
        </div>
    )
}

export default Home;