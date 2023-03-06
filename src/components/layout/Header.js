import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import { ProviderContext } from '../../context/ProviderContext';

export const Header = () => {
  const { languaje, setLanguaje, openMenu } = useContext(ProviderContext);

  return (
    <section className="header">
      <div className="mouse-follower-header"></div>
      <div id="logo">

      </div>
      <BurgerMenu />
      <nav className="nav-desktop">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu-desk" : "")}
              id="inicio" to="/">
              {(languaje) ? 'Inicio' : 'Start'}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu-desk" : "")}
              id="portafolio" to="/portafolio">{(languaje) ? 'Portafolio' : 'Portfolio'}</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu-desk" : "")}
              id="skills" to="/skills">Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu-desk" : "")}
              id="aboutme" to="/aboutme">{(languaje) ? 'Sobre mi' : 'About me'}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu-desk" : "")}
              id="contacto" to="/contacto">{(languaje) ? 'Contacto' : 'Contact'}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`language ${(openMenu) ? 'hide' : ''}`} onClick={() => setLanguaje(!languaje)}>{(languaje) ? 'EN' : 'ES'}</div>

    </section>
  );
};
