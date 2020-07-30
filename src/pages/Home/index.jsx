import React from 'react';
import './styles.css'
import Header from '../../components/Header_global/index';
<<<<<<< HEAD
import Social_midia from '../../components/Social_midia/index';
import {Link} from 'react-router-dom'
=======
import SocialMidia from '../../components/Social_midia/index';
>>>>>>> f1bd25544405a78928d9eb2cbeb1744313766cf5
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
                <SocialMidia></SocialMidia>
            </footer>
        </div>
    );
}
export default Home;