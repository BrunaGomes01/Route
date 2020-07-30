import React from 'react'
import './styles.css'
import Header from '../../components/HeadingOverall/index'
import BlocksFeatures from '../../components/BlocksFeatures/index'
const Features= () =>{
    return(
        <div id='PageFeatures'>
            <header>
                <Header></Header>
            </header>
            <div>
                <h2 id='TitleFeatures'>Best Popular Services</h2>
                <p id='SubtitleFeatures'>augue consequat nam molestie, maecenas 
                    imperdiet primis habitant <br />condimentum 
                    sagittis sodales mattis tempor 
                    hendrerit eleifend</p>
            </div>
            <main>
                <BlocksFeatures></BlocksFeatures>
            </main>
        </div>
    )
}
export default Features