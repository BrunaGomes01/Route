import React from 'react';
import Work from '../../assets/work.jpg';
import './styles.css'
const Blocks_feature=()=>{
    return(
        <div id='All_blocks'>
            <div id='Block1'>
                <img src={Work} alt='Work' className='Image'></img>
                <h4>Responsive Design</h4>
                <p>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </div>
            <div id='Block2'>
                <img src={Work} alt='Work' className= 'Image'></img>
                <h4>Clean e Easy Code</h4>
                <p>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </div>
            <div id='Block3'>
                <img src={Work} alt='Work' className='Image'></img>
                <h4>Branding Design</h4>
                <p>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </div>
            <div id='Block4'>
                <img src={Work} alt='Work' className='Image'></img>
                <h4>Excellent Support</h4>
                <p>deros amet viverra
                    volutpat sodales, proin duis feugiat himenaeos netus
                    eu ligula</p>
            </div>
        </div>
    );
}
export default Blocks_feature;