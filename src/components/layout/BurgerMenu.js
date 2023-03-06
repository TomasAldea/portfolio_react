import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProviderContext } from '../../context/ProviderContext';


export const BurgerMenu = () => {
  const { setOpenMenu, openMenu, languaje, setLanguaje } =  useContext(ProviderContext);
 
  // {(languaje) ? '' : ''}

  return (
    <section className="burger-menu">
      <div id="nav-icon3" onClick={() => setOpenMenu(!openMenu)} className={(openMenu) ? 'open': 'close'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`blur-zone ${(openMenu) ? 'active': ''}`}></div>
      <nav className={`nav-mobile ${(openMenu) ? 'active': ''}`}>
        <ul>
          <li>
            <span>01.</span>
            <NavLink
              id="inicioMb" className={({ isActive }) => (isActive ? "active-menu-mbl" : "")} to="/">
              {(languaje) ? 'Inicio' : 'Start'}
            </NavLink>
          </li>
          <li>
            <span>02.</span>
            <NavLink className={({ isActive }) => (isActive ? "active-menu-mbl" : "")} id="portafolioMb" to="/portafolio">
              {(languaje) ? 'Portafolio' : 'Portfolio'}
            </NavLink>
          </li>
          <li>
            <span>03.</span>
            <NavLink className={({ isActive }) => (isActive ? "active-menu-mbl" : "")} id="skillsMb" to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <span>04.</span>
            <NavLink className={({ isActive }) => (isActive ? "active-menu-mbl" : "")} id="aboutmeMb" to="/aboutme">
              {(languaje) ? 'Sobre mi' : 'About me'}
            </NavLink>
          </li>
          <li>
            <span>05.</span>
            <NavLink className={({ isActive }) => (isActive ? "active-menu-mbl" : "")} id="contactoMb" to="/contacto">
              {(languaje) ? 'Contacto' : 'Contact'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
