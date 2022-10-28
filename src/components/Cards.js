import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css";






const Cards = () => {

    const [level, setLevel] = useState([5, 4, 3, 2, 1]);


    return (
        <div className='cartao'>
            {level.map(lev =>
                <div className='Flip_card'>
                    <div className='Inner_card'>
                        <div className="Flip_card_front">
                            <p>N{lev}</p>
                        </div>
                        <div className="Flip_card_back">
                            <Link to={"N" + lev + "-kanji"} className='card_button'>Kanji</Link>
                            <Link to={"N" + lev + "-vocabulario"} className='card_button'>Vocabulário</Link>
                        </div>
                    </div>
                </div>
            )
            }

        </div>
    )


}

export default Cards;