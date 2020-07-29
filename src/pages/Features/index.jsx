import React from 'react';
import './styles.css';
import Header from '../../components/Header_global/index';
import Blocks_feature from '../../components/Blocks_features/index';
const Features= () =>{
    return(
        <div id='Page_features'>
            <header id='Header'>
                <Header></Header>
                <h2 id='Titulo'>Best Popular Services</h2>
                <p>augue consequat nam molestie, maecenas 
                    imperdiet primis habitant <br />condimentum 
                    sagittis sodales mattis tempor 
                    hendrerit eleifend</p>
            </header>
            <main id='Main'>
                <Blocks_feature></Blocks_feature>
            </main>
        </div>
    );
}
export default Features;