import React from 'react';
import './styles.css'
import Header from '../../components/Header_global/index';
import Social_midia from '../../components/Social_midia/index';
import {Link} from 'react-router-dom'
const Home= () =>{
    return(
        <div id='Page_home'>
            <header>
                <Header></Header>
            </header>
            <main id='Main'>
                <h2 id='Titulo'>SEAMAR</h2>
                <div id='Teste'>
                    <Link to='/portifolio'>
                        <button id='Button'>Get started now</button>
                    </Link>
                </div>
            </main>
            <footer>
                <Social_midia></Social_midia>
            </footer>
        </div>
    );
}
export default Home;