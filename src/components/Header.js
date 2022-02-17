import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { GiSpotedFlower } from 'react-icons/gi';
import SearchBar from './SearchBar';
import Login from './Login';


const Header = () => {


    return (
        <header className='menu'>
            <nav className='menu_nav'>
                <ul className='menu_ul'>
                    <li className='menu_li'>
                        <Link to="/" className='menu_link'><GiSpotedFlower />Home</Link>
                    </li>
                    <li className='menu_li'>
                        <Link to="/About" className='menu_link'><GiSpotedFlower />About</Link>
                    </li>
                    <li className='menu_li'>
                        <Login />
                    </li>
                </ul>
            </nav>
            <SearchBar />

        </header>

    )


}
export default Header;