import React from 'react'
import './styles.css'
import Header from '../../components/HeadingOverall/index'
import {Link} from 'react-router-dom'
import SocialNetwork from '../../components/SocialNetwork/index'
const Home= () =>{
    return(
        <div id='PageHome'>
            <header>
                <Header></Header>
            </header>
            <main id='Main'>
                <h2 id='TitleHome'>SEAMAR</h2>
                <div id='Click'>
                    <Link to='/portifolio'>
                        <button id='Button'>Get started now</button>
                    </Link>
                </div>
            </main>
            <footer>
                <SocialNetwork></SocialNetwork>
            </footer>
        </div>
    )
}
export default Home