import React, { Component } from 'react';
import PrimalLogo from './../../img/primal_logo.gif'
import Headroom from 'react-headroom'
import {withRouter} from 'react-router-dom'

class Header extends Component{
    constructor(props) {
        super(props)
        this.hideref = React.createRef()
        this.dropdownRef = React.createRef()
        this.showNavbar = this.showNavbar.bind(this)
        this.checknav = this.checknav.bind(this)
        this.showDropdown = this.showDropdown.bind(this)
        this.hideDropdown = this.hideDropdown.bind(this)
        this.disableDropdown = this.disableDropdown.bind(this)
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
    
    checknav(){
        if(this.hideref.current.classList.contains("show-navbar")){
            this.hideref.current.classList.add('hide-navbar')
        }
        this.hideref.current.classList.remove('show-navbar')
        this.dropdownRef.current.classList.remove('nav-showDropdown')
        this.dropdownRef.current.classList.remove('fadeIn')
        this.dropdownRef.current.classList.add('fadeOut')
    }
    
    showDropdown(){
        this.dropdownRef.current.classList.remove('fadeOut')
        this.dropdownRef.current.classList.remove('nav-hideDropdown')
        this.dropdownRef.current.classList.add('nav-showDropdown')
        this.dropdownRef.current.classList.add('fadeIn')
    }
    
    hideDropdown(){
        this.dropdownRef.current.classList.remove('nav-showDropdown')
        this.dropdownRef.current.classList.remove('fadeIn')
        this.dropdownRef.current.classList.add('fadeOut')
    }
    
    disableDropdown(){
        if(!this.dropdownRef.current.classList.contains('nav-showDropdown')){
            this.dropdownRef.current.classList.add('nav-hideDropdown')
        }
    }
    
    render(props) {
        const options = [
            { 
                menuItems: 'About' 
            },
            { 
                menuItems: 'Services',
                subItem: 
                [
                    {item: "Legacy System Solution", link: "/legacy"},
                    
                    {item: "Custom Softare", link: "/software"},
                    
                    {item: "Outsourcing", link: "/outsourcing"},
                    
                    {item: "Mobile", link: "/mobile"}
                    
                ]  
            },
            { 
                menuItems: 'Portfolio' 
            },
            { 
                menuItems: 'Contact' 
            }
            
        ];

        return (
            <Headroom disableInlineStyles onUnpin={this.checknav}>
                <header className="flex flex-jc-center header">
                    <div className="container flex flex-jc-sb flex-ai-center">
                        <img onClick={() => this.props.history.push("/")} className="logo" src={PrimalLogo} alt="Primal Logo" />
                        <nav className="main_nav" ref={this.hideref}>
                            <ul className="flex flex-jc-center flex-ai-center nav">
                                {options.map(menu => {
                                    if(menu.menuItems === "Services"){
                                        return(
                                            <li onMouseLeave={this.hideDropdown} onMouseEnter={this.showDropdown} key={menu.menuItems} className="navItem">
                                                <a onClick={this.showNavbar} className="glitch-excited link" href={`#${menu.menuItems}`} data-glitch={menu.menuItems}>{menu.menuItems}</a>
                                                <ul onAnimationEnd={this.disableDropdown}  className="nav-hideDropdown" ref={this.dropdownRef}>
                                                    <React.Fragment>
                                                        {menu.subItem.map(services => {
                                                            return(
                                                                <li onClick={() => this.props.history.push(services.link)} key={services.item}> {services.item} </li>
                                                            )
                                                        })}
                                                    </React.Fragment>
                                                </ul>
                                            </li>
                                        )
                                    }

                                    return(
                                        <li key={menu.menuItems} className="navItem">
                                            <a onClick={this.showNavbar} className="glitch-excited link" href={`#${menu.menuItems}`} data-glitch={menu.menuItems}>{menu.menuItems}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        <i onClick={this.showNavbar} className='icon-menu hamburger_bar'></i>
                    </div>
                </header>
            </Headroom>
        )
    }
}

export default withRouter(Header);