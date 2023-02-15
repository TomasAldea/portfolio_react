import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";


export const BurgerMenu = () => {

  return (
    <section className="header">
      <div className="logo">
        <span>TA</span>
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
