import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header=()=>{
    return(
        <div id='Header'>
            <div id='Logo'>
                <Link to='/'>
                    <img src={Logo} alt=""/>
                </Link> 
            </div>
            <div id='Options_menu'>
                <ul>
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link to= '/features'>
                        <li>FEATURES</li>
                    </Link>
                    <Link to='/portifolio'>
                        <li>PORTIFOLIO</li>
                    </Link>   
                </ul>
            </div>
        </div>
    );
}
export default Header;
