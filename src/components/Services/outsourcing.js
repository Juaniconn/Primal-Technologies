import React from 'react'
import LeftSide from './left_side'
import Header from './../basic/Header'
import Footer from './../basic/Footer'

const Outsourcing = () => {
    return (
        <div className="main_outsourcing">
            <Header/>
                <LeftSide option="Outsourcing" />
            <Footer/>
        </div>
    )
}

export default Outsourcing