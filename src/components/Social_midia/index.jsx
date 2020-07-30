import React from 'react';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Twitter from '../../assets/twitter.png';
import './styles.css'

const Social_midia= ()=>{
    return(
        <div id='Social'>
            <ul>
<<<<<<< HEAD
                <li><a href='https://www.instagram.com/compet.cefet/' target='_black'><img src={Instagram} alt='Instagram'></img></a></li>
=======
                <li>
                    <a href='https://www.instagram.com/compet.cefet/' target='_black'>
                        <img src={Instagram} alt='Instagram'/>
                    </a>
                </li>
>>>>>>> f1bd25544405a78928d9eb2cbeb1744313766cf5
                <li><a href='https://www.facebook.com/competcefetmg/' target='_black'><img src={Facebook} alt='Facebook'></img></a></li>
                <li><a href='https://www.linkedin.com/in/compet-pet-de-engenharia-de-computação-261362174' target='_black'><img src={Linkedin} alt='LinkedIn'></img></a></li>
                <li><a href='https://twitter.com/compet_cefet' target='_black'><img src={Twitter} alt='Twitter'></img></a></li>
            </ul>
        </div>
    );
}
export default Social_midia;