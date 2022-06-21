import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Cartao= styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;

const Card= styled.div`
    display: flex;
    flex-direction: column;
    height: 175px;
    width: 130px;
    background-color: rgb(255, 255, 255, 0.45) !important;
    border-radius: 20px;
    box-shadow: 5px 2px 2px #D4D4D4;
    align-items: center;
    margin: 20px;
    transition: width 1s, height 1s, background-color 1s;

&:hover{
    width:160px;
    height:200px;
    background-color: rgb(255, 255, 255, 0.85) !important;
}

& p{
    font-size: 25px;
    font-weight: bolder;
}

& a{
    background-color: #41A5F5;
    color: aliceblue;
    text-decoration: none;
    font-size: 15px;
    margin: 12px;
    text-align: center;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: groove;
}

& a:hover{
    box-shadow: 3px 2px 2px #351EE6;
    cursor: pointer;
    transition: box-shadow 0.5s;
}
`;

const Cards = () => {

    const [level, setLevel]= useState([5,4,3,2,1]);


    return(
        <Cartao>
                {level.map(lev =>
                    <Card>
                        <p>N{lev}</p>
                        <Link to={"N"+lev+"-kanji"} className='card_button'>Kanji</Link>
                        <Link to={"N"+lev+"-vocabulario"} className='card_button'>Vocabulário</Link>
                    </Card>
                )
                }
           
        </Cartao>
    )


}

export default Cards;