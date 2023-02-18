import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProviderContext } from '../../context/ProviderContext';


export const BurgerMenu = () => {
  const {setOpenMenu,openMenu} =  useContext(ProviderContext);
 
  return (
    <section className="burger-menu">
      <div id="nav-icon3" onClick={() => setOpenMenu(!openMenu)} className={(openMenu) ? 'open': 'close'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-mobile ${(openMenu) ? 'active': ''}`}>
        <ul>
          <li>
            <span>01.</span>
            <NavLink
              id="inicio" className={({ isActive }) => (isActive ? "active" : "")} to="/inicio">
              Inicio
            </NavLink>
          </li>
          <li>
            <span>02.</span>
            <NavLink id="portafolio" to="/portafolio">Portafolio</NavLink>
          </li>
          <li>
            <span>03.</span>
            <NavLink id="skills" to="/skills">Skills</NavLink>
          </li>
          <li>
            <span>04.</span>
            <NavLink id="aboutme" to="/aboutme">Sobre mi</NavLink>
          </li>
          <li>
            <span>05.</span>
            <NavLink id="contacto" to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
