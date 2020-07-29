import React from 'react';
import './styles.css';
import Blocks_portifolio from '../../components/Blocks_portifolio/index';
const Portifolio=()=>{
    return(
        <div id='Page_portifolio'>
            <header id='Header'>
                <h3>Our services</h3>
                <h2>We make it simple,
                providing best solutions</h2>
            </header>
            <main id='Main'>
                <Blocks_portifolio></Blocks_portifolio>
            </main>
        </div>
    );
}
export default Portifolio; 