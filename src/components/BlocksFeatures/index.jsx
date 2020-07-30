import React from 'react'
import Work from '../../assets/work.jpg'
import './styles.css'
const BlocksFeature=()=>{
    return(
        <section id='AllBlock'>
            <article id='Block'>
                <img src={Work} alt='Work' id='ImageFeature'></img>
                <h4 id='Name'>Responsive Design</h4>
                <p id='Texto'>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </article>
            <article id='Block'>
                <img src={Work} alt='Work' id= 'ImageFeature'></img>
                <h4 id='Name'>Clean e Easy Code</h4>
                <p id='Texto'>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </article>
            <article id='Block'>
                <img src={Work} alt='Work' id='ImageFeature'></img>
                <h4 id='Name'>Branding Design</h4>
                <p id='Texto'>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </article>
            <article id='Block'>
                <img src={Work} alt='Work' id='ImageFeature'></img>
                <h4 id='Name'> Excellent Support</h4>
                <p id='Texto'>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </article>
        </section>
    )
}
export default BlocksFeature