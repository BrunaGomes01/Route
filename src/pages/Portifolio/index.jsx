import React from 'react';
import './styles.css';
import Header from '../../components/Header_global/index'
import Blocks_portifolio from '../../components/Blocks_portifolio/index';
const Portifolio=()=>{
    return(
        <div id='Page_portifolio'>
            <header>
                <Header></Header>
                <h3 id='Titulo'>Our services</h3>
                <h2 id='Subtitulo'>We make it simple,
                providing best solutions</h2>
            </header>
            <main>
                <Blocks_portifolio></Blocks_portifolio>
            </main>
        </div>
    );
}
export default Portifolio; 