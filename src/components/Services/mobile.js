import React from 'react'
import LeftSide from './left_side'
import Header from './../basic/Header'
import Footer from './../basic/Footer'

const Mobile = () => {
    return (
        <div className="main_mobile">
            <Header/>
                <LeftSide option="Mobile" />
            <Footer/>
        </div>
    )
}

export default Mobile