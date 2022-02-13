import React from "react";
import "./SearchBar.css";
import { BiSearchAlt2 } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.css';


const SearchBar = () => {


    return (
        <div className="searchbar">
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping"><BiSearchAlt2 /></span>
                <input type="text" class="form-control" placeholder="Pesquisa" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
        </div>
    )
}


export default SearchBar;