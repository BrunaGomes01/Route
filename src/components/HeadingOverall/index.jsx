import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './styles.css'

const Header=()=>{
    return(
        <div id='Header'>
            <div>
                <Link to='/'>
                    <img src={Logo} alt='Logo Seamar' id='Logo'/>
                </Link> 
            </div>
            <div id='OptionsMenu'>
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
    )
}
export default Header
