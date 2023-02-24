import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";


export const Header = () => {


  return (
    <section className="header">
      <div className="mouse-follower-header"></div>
      <div id="logo">
       
      </div>
      <BurgerMenu/>
      <nav className="nav-desktop">
        <ul>
          <li>
            <NavLink
              id="inicio" className={({ isActive }) => (isActive ? "active" : "")} to="/">
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
