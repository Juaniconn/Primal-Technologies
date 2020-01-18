import React from 'react'
import LeftSide from './left_side'
import Header from './../basic/Header'
import Footer from './../basic/Footer'

const Custom_software = () => {
    return (
        <div className="main_customSoftware">
            <Header/>
                <LeftSide option="Custom Software" />
            <Footer/>
        </div>
    )
}

export default Custom_software