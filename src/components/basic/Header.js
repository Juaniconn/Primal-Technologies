import React, { Component } from 'react';
import PrimalLogo from './../../img/primal_logo.gif'

class Header extends Component {

    constructor() {
        super()
        this.hideref = React.createRef()
        this.showNavbar = this.showNavbar.bind(this)
    }

    showNavbar() {
        if (!this.hideref.current.classList.contains('show-navbar')) {
            this.hideref.current.classList.add('show-navbar')
            this.hideref.current.classList.remove('hide-navbar')
        } else {
            this.hideref.current.classList.remove('show-navbar')
            this.hideref.current.classList.add('hide-navbar')
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
                    <nav className="main_nav" ref={this.hideref}>
                        <ul className="flex flex-jc-center flex-ai-center nav">
                            {menuItems.map(item => {
                                return (
                                    <li key={item} className="navItem" onClick={this.showNavbar}>
                                        <a className="glitch-excited link" href={`#${item}`} data-glitch={item}>{item}</a>
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