import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './styles.css'

const Header=()=>{
    return(
        <div id='Header'>
            <div>
                <Link to='/'>
<<<<<<< HEAD
                    <img src={Logo} alt='Logo' id='Logo'/>
=======
                    <img src={Logo} alt=""/>
>>>>>>> f1bd25544405a78928d9eb2cbeb1744313766cf5
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
