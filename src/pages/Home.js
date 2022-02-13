import React from 'react';
import './Home.css';
import Cards from "../components/Cards";

const Home = () => {
    return(
        <div className='home'>
            <h1>Seja bem vindo!</h1>
            <Cards />
        </div>
    )
}

export default Home;