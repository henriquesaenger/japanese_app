import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {

    return(
        <div className="footer">
            <div className="footer_container_1">
                <button>Níveis</button>
                <Link to="/about">Sobre nós</Link>
            </div>
            <div className="footer_container_2">
                <p>Rua da consolação, 0000</p>
                <p>Jundiaí, SP</p>
                <p>CEP: 00000-000</p>
            </div>
            <div className="footer_container_3">
                <button>Suporte</button>
                <button>Política de privacidade</button>
                <button>Fale conosco</button>
            </div>
        </div>
    )
}




export default Footer;