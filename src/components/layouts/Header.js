import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navigationhelper';
import Logo from '../sections/images/logofructus.webp'
import Mobilemenu from '../layouts/Mobilemenu';
import Menu from './Menu';
import classNames from 'classnames';

class Header extends HeaderComponent {
    render() {
        return (
            <Fragment>
               
              
                {/* Search Form End*/}
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navmethod })}>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Header Start */}
                <header className="main-header header-1 header-absolute">               
                    <div className="container">
                        <nav className="navbar">
                            {/* Logo */}
                            <Link className="navbar-brand" to="/">
                                <img src={Logo} alt="logo" loading='lazy'  width="120" height="77"/>
                            </Link>
                            {/* Menu */}
                            <Menu />
                            <div className="header-controls">
                                
                                {/* Toggler */}
                                <div className="aside-toggler aside-trigger" onClick={this.toggleNav}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* Header End */}
            </Fragment>
        );
    }
}

export default Header;