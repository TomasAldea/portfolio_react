import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import { ProviderContext } from '../../context/ProviderContext';

export const Header = () => {
  const { setOpenMenu, languaje, setLanguaje } = useContext(ProviderContext);

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
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu-desk" : "")}
              id="portafolio" to="/portafolio">Portafolio</NavLink>
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
              id="aboutme" to="/aboutme">Sobre mi
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-menu-desk" : "")}
              id="contacto" to="/contacto">Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="language" onClick={() => setLanguaje(!languaje)}>{(languaje) ? 'EN' : 'ES'}</div>

    </section>
  );
};
