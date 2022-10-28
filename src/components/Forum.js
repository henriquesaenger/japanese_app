import React, { useState } from 'react';
import $ from 'jquery';
import people from '../images/people.jpg';
import styled from 'styled-components';



const Container_forum= styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    background-color: aliceblue;
    border-radius: 14px;
    margin-bottom: 30px;

    .container_comentarios{
        display: none;
    }

`;

const Barra= styled.div`
    display: flex;
    flex-direction: row;

    & p{
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        align-self: center;
    }

    & button{
        margin-right: 10px;
        padding: 0px 0px 0px 5px;
        border: none;
        background-color: aliceblue;
        font-size: 25px;
        border-bottom-left-radius: 14px;
        border-top-left-radius: 14px;
    }

    .forum_pluy{
        display: block;
    }
    .forum_minus{
        display: none;
    }
`;

const Corpo= styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    & img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 10px;
        margin-right: 10px;
    }

    & p{
        width: 90%;
        margin-right: 20px;
    }
`;

const Forum = () => {

    const [comentarios, setComentarios]= useState([5,4,3,2,1]);

    const handleClick_show = () =>{
        $(".forum_plus").hide();      
        $(".forum_minus").show();  
        $(".container_comentarios").show(600);
    }

    const handleClick_hide = () =>{
        $(".forum_minus").hide();      
        $(".forum_plus").show();
        $(".container_comentarios").hide(600);  
    }

    return(
        <Container_forum>
            <Barra>
                <button className='forum_plus' onClick={() => handleClick_show()}> + </button>
                <button className='forum_minus' onClick={()=> handleClick_hide()}> - </button>
                <p>Fórum de discussão sobre as provas</p>
            </Barra>
            <div className='container_comentarios'>
                {comentarios.map(com =>
                    <Corpo>
                        <img className='usuario' src={people} />
                        <p className='coment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum interdum ultrices. Phasellus ut fringilla elit. Suspendisse non semper ante, sit amet egestas enim. Donec ullamcorper magna quis elit sollicitudin.</p>
                    </Corpo>
                    )}

            </div>
            
        </Container_forum>
    )
}



export default Forum;