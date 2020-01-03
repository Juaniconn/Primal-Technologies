import React, { Component } from 'react';
import PrimalLogo from './../../img/primal_logo.gif'

class Header extends Component {

    constructor() {
        super()
        this.hideref = React.createRef()
        this.showNavbar = this.showNavbar.bind(this)
    }

    showNavbar() {
        if (!this.hideref.current.classList.contains('show_Navbar')) {
            this.hideref.current.classList.add('show_Navbar')
            this.hideref.current.classList.remove('hide_Navbar')
        } else {
            this.hideref.current.classList.remove('show_Navbar')
            this.hideref.current.classList.add('hide_Navbar')
        }
    }

    render() {
        const menuItems = ["About", "Services", "Portfolio", "Contact"];
        return (
            <header className="flex flex-jc-center header">
                <div className="container flex flex-jc-sb flex-ai-center">
                    <a href="#Home">
                        <img className="logo" src={PrimalLogo} alt="Primal Logo" />
                    </a>
                    <nav ref={this.hideref}>
                        <ul className="flex flex-jc-center flex-ai-center nav">
                            {menuItems.map(item => {
                                return (
                                    <li key={item} className="navItem">
                                        <a onClick={this.showNavbar} className="glitch link" href={`#${item}`} data-glitch={item}>{item}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <i onClick={this.showNavbar} className='icon-menu hamburger_bar'></i>
                </div>
            </header>
        )
    }
}

export default Header;