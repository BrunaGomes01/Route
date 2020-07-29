import React from 'react';
import './styles.css';
import Header from '../../components/Header_global/index';
import Social_midia from '../../components/Social_midia/index';
const Home= () =>{
    return(
        <div id='Page_home'>
            <header>
                <Header></Header>
            </header>
            <main>
                <h2 id='Titulo'>SEAMAR</h2>
                <h4>Get started now</h4>
            </main>
            <footer>
                <Social_midia></Social_midia>
            </footer>
        </div>
    );
}
export default Home;