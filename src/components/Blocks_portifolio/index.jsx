import React from 'react';
import './styles.css';
import Work from '../../assets/work.jpg';
const Block_portifolio=()=>{
    return(
        <div id='All_blocks'>
            <div id='Block1'>
                <img src={Work} alt='Work'></img>
                <h3>Creative Ideas</h3>  
            </div>
            <div id='Block2'>
                <img src={Work} alt='Work'></img>
                <h3>Digital Solutions</h3>  
            </div>
            <div id='Block3'>
                <img src={Work} alt='Work'></img>
                <h3>Brand e Communication</h3>  
            </div>
            <div id='Block4'>
                <img src={Work} alt='Work'></img>
                <h3>Modern</h3>  
            </div>

        </div>
    );
}
export default Block_portifolio;