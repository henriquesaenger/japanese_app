import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { GiSpotedFlower } from 'react-icons/gi';

const Header = () => {

    return(
        <header>
            <nav className='menu_nav'>
                <ul className='menu_ul'>
                    <li className='menu_li'>
                        <Link to="/" className='menu_link'><GiSpotedFlower />Home</Link>
                    </li>
                    <li className='menu_li'>
                        <Link to="/about" className='menu_link'><GiSpotedFlower />About</Link>
                    </li>
                    <li className='menu_li'>
                        <Link to="/users" className='menu_link'><GiSpotedFlower />Users</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
    

}

export default Header;