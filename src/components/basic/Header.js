import React from 'react';
import PrimalLogo from './../../img/primal_logo.gif'

function Header() {
    const menuItems = ["About", "Services", "Portfolio", "Contact"];

    return (
        <header className="header">
            <div className="container">
                <a href="#">
                    <img className="logo" src={PrimalLogo} alt="Primal Logo" />
                </a>
                <nav>
                    <ul className="nav">
                        {menuItems.map(item => {
                            return (
                                <li className="navItem">
                                    <a className="glitch link" href={`#${item}`} data-glitch={item}>{item}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;