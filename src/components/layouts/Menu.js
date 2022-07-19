import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <ul className="navbar-nav">
                <ol className="submenu" role="menu">
                    <li className="menu-item ">
                        <Link to='/'>Inicio</Link>
                    </li>

                    <li className="menu-item " role="menuitem">
                        <Link to='/about'>Sobre Nosotros</Link>
                    </li>

                    <li className="menu-item "  role="menuitem">
                        <Link to='/'>Quienés somos</Link>
                    </li>
                    <a href="#form" className="button1" role="button" aria-pressed="true">Registrarme</a>
                </ol>

            </ul>

        );
    }
}

export default Menu;