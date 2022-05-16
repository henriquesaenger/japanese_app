import React from "react";
import { BiSearchAlt2 } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";


const Search= styled.div`
    align-self: center;
    width: 30%;

    .input-group{
        height: 35px;
        width: 70% !important;
    }

    @media screen and (max-width: 991px){
        width: 100%;
        padding: 0.5rem 0rem 1rem;
    }
`;


const SearchBar = () => {


    return (
        <Search>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><BiSearchAlt2 /></span>
                <input type="text" class="form-control" placeholder="Pesquisa" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
        </Search>
    )
}


export default SearchBar;