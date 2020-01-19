import React from 'react'
import Header from './../basic/Header'
import Footer from './../basic/Footer'
import LeftSide from './../Services/left_side'
import ServiceContent from './../Services/service_content'

const Outsourcing = () => {
    const fields = {
        title: 'Outsourcing',
        content: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a quisquam itaque maxime nam. Sapiente ipsum ratione voluptate, aperiam at architecto autem suscipit dolores atque excepturi! Sapiente expedita amet culpa.
            </p>
        )
    }
    
    return (
        <div className="main_service">
            <Header/>
            <div className="service_wrapper">
                <LeftSide title={fields.title}/>
                <ServiceContent content={fields.content}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Outsourcing