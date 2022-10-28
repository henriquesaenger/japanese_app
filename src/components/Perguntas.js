import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import $ from "jquery";
import Swal from 'sweetalert2';

const Container_perguntas= styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
`;

const Container_comecar= styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: fit-content;
    margin: 40px;
    border-radius: 18px;
    box-shadow: 5px 2px 2px #D4D4D4;
    background-color: #41A5F5;
    justify-content: center;

    & p{
        font-size: 20px;
        text-align: center;
        margin: 20px;
        color: white;
        font-weight: bolder;
    }

    & button{
        width: 150px;
        height: 30px;
        margin-top: 15px;
        border-radius: 18px;
        border-color: white;
        background-color: transparent;
        color: white;
        align-self: center;
        font-weight: bolder;
        margin-bottom: 15px;
    }

    & button:hover{
        border-color: transparent;
        background-color: white;
        color: #41A5F5;
    }

`;

const Quadro= styled.div`
    display: none;
    flex-direction: column;
    width: 75%;
    height: fit-content;
    margin: 40px;
    border-radius: 18px;
    box-shadow: 5px 2px 2px #D4D4D4;
    background-color: #41A5F5;
    justify-content: center;

    & p{
        font-size: 20px;
        text-align: center;
        margin: 20px;
        margin-bottom: 0px;
        color: white;
        font-weight: bolder;
    }

    & button.retornar{
        border: none;
        background-color: #802CF5;
        color: white;
        padding: 10px;
        width: fit-content;
        border-radius: 18px;
        text-align-last: center;
        margin: 15px;
        font-weight: bold;
    }
`;

const Botoes= styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;

    & button{
        border: none;
        background-color: white;
        color: #41A5F5;
        padding: 10px;
        width: fit-content;
        border-radius: 18px;
        text-align-last: center;
        margin: 15px;
        font-weight: bold;
        font-size: 16px;

    }
    
    & button.shake1{
        animation: shake 0.5s infinite;
        background-color: red !important;
    }
    & button.shake2{
        animation: shake 0.5s infinite;
        background-color: red !important;
    }
    & button.shake3{
        animation: shake 0.5s infinite;
        background-color: red !important;
    }
    & button.shake4{
        animation: shake 0.5s infinite;
        background-color: red !important;
    }

    @keyframes shake {
        0%  { transform: translate(2px, 1px)   rotate(0deg);  }
        10% { transform: translate(-1px, -2px) rotate(-2deg); }
        20% { transform: translate(-3px, 0px)  rotate(3deg);  }
        30% { transform: translate(0px, 2px)   rotate(0deg);  }
        40% { transform: translate(1px, -1px)  rotate(1deg);  }
        50% { transform: translate(-1px, 2px)  rotate(-1deg); }
        60% { transform: translate(-3px, 1px)  rotate(0deg);  }
        70% { transform: translate(2px, 1px)   rotate(-2deg); }
        80% { transform: translate(-1px, -1px) rotate(4deg);  }
        90% { transform: translate(2px, 2px)   rotate(0deg);  }
        100%{ transform: translate(1px, -2px)  rotate(-1deg); }
    }

`;


const Perguntas = (props) =>{
    var limitacao_lista= props.limite;
    var lista_possibilidades= props.texto;
    var [score, setScore]= useState(0);
    var [total, setTotal]= useState(0);
    var [pergunta, setPergunta]= useState("");
    var [possibilidades, setPossibilidades]= useState([]);
    const [shake, setShake] = useState([false,false,false, false]);
    var history = useHistory();

    async function perguntasAleatorias(){
        pergunta= pickRandom(limitacao_lista);
        await setPergunta(pergunta);
        console.log(pergunta);
        possibilidades= [];
        for(var i=0; i<3; i++){
            var pos= [];
            pos= pickRandom(limitacao_lista).split(",");
            console.log(pos);
            possibilidades.push(pos[2]);
            console.log(possibilidades);
        }
        possibilidades.push(pergunta.split(",")[2]);
        console.log(possibilidades);
        // console.log(pergunta.split(",")[0]);
        // console.log(pergunta.split(",")[1]);
        console.log(possibilidades);
        possibilidades.sort(() => Math.random() - 0.5);
        console.log(possibilidades);
        await setPossibilidades(possibilidades);
        hideWindow();
    }

    const pickRandom= (limite) => {
        return lista_possibilidades[Math.floor(Math.random() * limite)];
    }


    const hideWindow= () => {
        $(".vocab_n5").hide();
        $(".vocab_n5_perguntas").show();
    }

    const confirm = (numero) =>{
        switch(numero){
            case 0:
                if(possibilidades[0] == pergunta.split(",")[2]){
                    score+=1;
                    setScore(score);
                    $(".correct1").css("background-color", "#60E676");
                    $(".correct1").css("color", "white");
                    setTimeout(() => {
                        $(".correct1").css("color", "#41A5F5");
                        $(".correct1").css("background-color", "white");}, 3000);

                }
                else{
                    animate(0);
                }
                break;
            case 1:
                if(possibilidades[1] == pergunta.split(",")[2]){
                    score+=1;
                    setScore(score);
                    $(".correct2").css("background-color", "#60E676");
                    $(".correct2").css("color", "white");
                    setTimeout(() => {
                        $(".correct2").css("color", "#41A5F5");
                        $(".correct2").css("background-color", "white")}, 3000);
                }
                else{
                    animate(1);
                }
                break;
            case 2:
                if(possibilidades[2] == pergunta.split(",")[2]){
                    score+=1;
                    setScore(score);
                    $(".correct3").css("background-color", "#60E676");
                    $(".correct3").css("color", "white");
                    setTimeout(() => {
                        $(".correct3").css("color", "#41A5F5");
                        $(".correct3").css("background-color", "white")}, 3000);
                }
                else{
                    animate(2);
                }
                break;
            case 3:
                if(possibilidades[3] == pergunta.split(",")[2]){
                    score+=1;
                    setScore(score);
                    $(".correct4").css("background-color", "#60E676");
                    $(".correct4").css("color", "white");
                    setTimeout(() => {
                        $(".correct4").css("color", "#41A5F5");
                        $(".correct4").css("background-color", "white")}, 3000);
                }
                else{
                    animate(3);
                }
                break;
        }
        setTotal(total+=1);
        setTimeout(() => perguntasAleatorias(), 3000);
        console.log(score);
    }

    const animate = (numero) => {
        switch(numero){
            case 0:
                setShake([true, false, false, false]);
                setTimeout(() => setShake([false, false, false, false]), 1000);
                break
            case 1:
                setShake([false, true, false, false]);
                setTimeout(() => setShake([false, false, false, false]), 1000);
                break;
            case 2:
                setShake([false, false, true, false]);
                setTimeout(() => setShake([false, false, false, false]), 1000);
                break;
            case 3:
                setShake([false, false, false, true]);
                setTimeout(() => setShake([false, false, false, false]), 1000);
                break;
        }
    }


    


    return(
        <Container_perguntas>
            <Header />
            <Container_comecar className="vocab_n5" id="per">
                <p>Assim que o teste começar, ele só parará quando for pressionado o botão de resultado.</p>
                <p><br />Quando pressionado o botão de resultado, as estatísticas do seu teste de memorização aparecerão na tela.</p>
                <p><br />Preparado?</p>
                <button onClick={() => perguntasAleatorias()}>Começar</button>
            </Container_comecar>
            {pergunta ? 
            <Quadro className="vocab_n5_perguntas">
                <p>{pergunta.split(",")[0]}</p>
                <p>{pergunta.split(",")[1]}<br /></p>
                <Botoes>
                    <button className={shake[0] ? `shake1` : `correct1`} onClick={() => confirm(0)}>{possibilidades[0]}</button>
                    <button className={shake[1] ? `shake2` : `correct2`} onClick={() => confirm(1)}>{possibilidades[1]}</button>
                    <button className={shake[2] ? `shake3` : `correct3`} onClick={() => confirm(2)}>{possibilidades[2]}</button>
                    <button className={shake[3] ? `shake4` : `correct4`} onClick={() => confirm(3)}>{possibilidades[3]}</button>
                </Botoes>
                <button className="retornar" onClick={() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Resultado',
                        text: "Você acertou "+ (Number.isNaN(score/total) ? "0" : (score/total)*100).toFixed(2)  + "% das perguntas!!!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                            history.go(0);
                        }
                      });
                    }}
                >Resultado</button>
            </Quadro>
            :null }
            <Footer />
        </Container_perguntas>
    )

}


export default Perguntas;