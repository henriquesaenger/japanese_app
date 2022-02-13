import React, { useState } from 'react';
import "./Cards.css";


const Cards = () => {

    const [level, setLevel]= useState([5,4,3,2,1]);


    return(
        <div className='cards'>
                {level.map(lev =>
                    <div className='card'>
                        <p>N{lev}</p>
                        <button className='card_button'>Kanji</button>
                        <button className='card_button'>Vocabulário</button>

                    </div>
                )
                }
        </div>
    )


}


export default Cards;