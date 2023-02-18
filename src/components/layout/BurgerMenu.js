import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export const BurgerMenu = () => {
  const [burger, setBurger] = useState(false)
  return (
    <section className="burger-menu">

      <div id="nav-icon3" onClick={() => setBurger(!burger)} className={(burger) ? 'open': 'close'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              id="inicio" className={({ isActive }) => (isActive ? "active" : "")} to="/inicio">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink id="portafolio" to="/portafolio">Portafolio</NavLink>
          </li>
          <li>
            <NavLink id="skills" to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink id="aboutme" to="/aboutme">Sobre mi</NavLink>
          </li>
          <li>
            <NavLink id="contacto" to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
