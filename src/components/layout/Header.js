import React from 'react'
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>V</span>
                <h3>Tomás Aldea Moral</h3>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active": ""} to="/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio">Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum">Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
