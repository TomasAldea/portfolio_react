import React, { useState,useEffect, useContext } from "react";
import { ProviderContext } from '../context/ProviderContext';

export const AboutMe = () => {
  const {setOpenMenu} =  useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, [])
  
  return (
    <section className='section-aboutme' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div className="row">
          <div className="description col">
            <div className="title" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-down">Sobre mi...</div>
            <div className="text" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-right">
              Soy una persona impulsada por los retos.<br></br>
              <br></br>
              hace unos años, y después de media vida como profesional de la hosteleria,
              decidí hacer de mi pasión y mi hobbie, mi profesión.<br></br>
              <br></br>
              En la programación encontré una forma de crecimiento personal continuo.
            </div>
          </div>
          <div className="photo">
            <div className="img">
            <div className="fakebg"></div>
            </div>
          </div>
        </div>
    </section>
  )
}
