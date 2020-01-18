import React from 'react'
import Header from './../basic/Header'
import Footer from './../basic/Footer'
import LeftSide from './../Services/left_side'

const Legacy_code = () => {
    return (
        <div className="main_legacycode">
            <Header/>
                <LeftSide option="Legacy System Solutions" />
            <Footer/>
        </div>
    )
}

export default Legacy_code