import React from 'react'
import './styles.css'
import Work from '../../assets/work.jpg'
const BlockPortifolio=()=>{
    return(
        <section id='Content'>
            <article id='Item'>
                <img src={Work} alt='Work' id='ImagePortifolio'></img>
                <h3 id='NamePortifolio'>Creative Ideas</h3>  
            </article>
            <article id='Item'>
                <img src={Work} alt='Work' id='ImagePortifolio'></img>
                <h3 id='NamePortifolio'>Digital Solutions</h3>  
            </article>
            <article id='Item'>
                <img src={Work} alt='Work'id='ImagePortifolio'></img>
                <h3 id='NamePortifolio'>Brand e Communication</h3>  
            </article>
            <article id='Item'>
                <img src={Work} alt='Work'id='ImagePortifolio'></img>
                <h3 id='NamePortifolio'>Modern</h3>  
            </article>

        </section>
    )
}
export default BlockPortifolio