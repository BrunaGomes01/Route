import React from 'react';
import './styles.css';
import Header from '../../components/Header_global/index';
import Blocks_feature from '../../components/Blocks_features/index';
const Features= () =>{
    return(
        <div id='Page_features'>
            <header>
                <Header></Header>
            </header>
            <div id='Intro'>
                <h2 id='Titulo'>Best Popular Services</h2>
                <p id='Subtitulo'>augue consequat nam molestie, maecenas 
                    imperdiet primis habitant <br />condimentum 
                    sagittis sodales mattis tempor 
                    hendrerit eleifend</p>
            </div>
            <main id='Main'>
                <Blocks_feature></Blocks_feature>
            </main>
        </div>
    );
}
export default Features;