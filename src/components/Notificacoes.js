import react,  { useState } from "react";
import $ from 'jquery';
import people from '../images/people.jpg';
import { GiTrophy } from 'react-icons/gi';
import styled from "styled-components";
import { Container } from "react-bootstrap";


const Container_notificacoes= styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    background-color: aliceblue;
    border-radius: 14px;
    margin-bottom: 30px;

    .notificacoes{
        display: none;
    }
`;

const Barra_not= styled.div`
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

    .notificacoes_plus{
        display: block;
    }
    
    .notificacoes_minus{
        display: none;
    }

    

`;

const Notificacao= styled.div`
    
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    align-items: self-end;

    & img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 10px;
        margin-right: 10px;
    }

    
    .not_trophy{
        height: 50px;
        width: 30px;
    }
`;


const Notificacoes = () => {
    
    const [comentarios, setComentarios]= useState([5,4,3,2,1]);

    const handleClick_show = () =>{
        $(".notificacoes_plus").hide();      
        $(".notificacoes_minus").show();  
        $(".notificacoes").show(600);
    }

    const handleClick_hide = () =>{
        $(".notificacoes_minus").hide();      
        $(".notificacoes_plus").show();
        $(".notificacoes").hide(600);  
    }

    return(
        <Container_notificacoes>
            <Barra_not>
                <button className='notificacoes_plus' onClick={() => handleClick_show()}> + </button>
                <button className='notificacoes_minus' onClick={()=> handleClick_hide()}> - </button>
                <p>Notificações</p>
            </Barra_not>
            <div className='notificacoes'>
                {comentarios.map(not =>
                    <Notificacao>
                        <img className='usuario' src={people} />
                        <GiTrophy className='not_trophy'/>
                        <p>Fulano conseguiu troféu N{not} em vocabulário</p>
                    </Notificacao>
                )}

            </div>
        </Container_notificacoes>
    )
}


export default Notificacoes;