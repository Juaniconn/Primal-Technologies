import React from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'


function Header() {
    return(
        <header className="header">
            <div className="container">
                <a className="header_logo" href="#"></a>
                <nav className="nav">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li id="test"><a href="#">Services</a>
                            <ul id="test2" className="nav_servicesHidden">
                                <li><a href="#">Legacy Code</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Outsourcing</a></li>
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Mobile</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

const test = document.getElementById('test')
const test2 = document.getElementById("test2")

document.addEventListener('DOMContentLoaded', (event) =>{
    if(test){
        test.addEventListener("mouseover", (event) => {
            console.log("test")
        })
    }

    console.log(test)
    console.log("hola")
})



export default Header;