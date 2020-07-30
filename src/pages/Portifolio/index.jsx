import React from 'react'
import './styles.css'
import Header from '../../components/HeadingOverall/index'
import BlocksPortifolio from '../../components/BlocksPortifolio/index'
const Portifolio=()=>{
    return(
        <div id='PagePortifolio'>
            <header>
                <Header></Header>
                <h3 id='TitlePortifolio'>Our services</h3>
                <h2 id='SubtitlePortifolio'>We make it simple,
                providing best solutions</h2>
            </header>
            <main>
                <BlocksPortifolio></BlocksPortifolio>
            </main>
        </div>
    )
}
export default Portifolio