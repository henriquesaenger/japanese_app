import React from 'react';
import './Home.css';
import Cards from "../components/Cards";
import { GiTrophy } from 'react-icons/gi';
import Cartaz from "../components/Cartaz";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <div className='home'>
            <Header />
            <Cartaz />
            <div className='barra_top'>
                <div className='trophy_div'>
                    <GiTrophy className='trophy' />
                    <p>Troféis conquistados:</p>
                    <h1>(0 / 10)</h1>

                </div>
                <Cards />
            </div>
            <Footer />
        </div>
    )
}

export default Home;