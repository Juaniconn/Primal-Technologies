import React from 'react'
import Header from './../basic/Header'
import Footer from './../basic/Footer'
import LeftSide from './../Services/left_side'

const Legacy_code = () => {

    const options = [
        { 
            item: 'Legacy System Solutions' 
        },
        { 
            item: 'Custom Software'
        },
        { 
            item: 'Outsourcing' 
        },
        { 
            item: 'Mobile' 
        }
    ]

    return (
        <div className="main_legacycode">
            <Header/>
                <LeftSide option={options[0]} />
            <Footer/>
        </div>
    )
}

export default Legacy_code