import React, { useState,useEffect, useContext } from "react";
import { ProviderContext } from '../context/ProviderContext';

export const AboutMe = () => {
  const {setOpenMenu} =  useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, [])
  
  return (
    <section className='section-aboutme'>
        <div className="row">
          <div className="description col">
            <div className="title">Sobre mi...</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus felis vitae urna sodales,
              quis congue nulla convallis. Ut non justo quis enim aliquam varius at sit amet justo.
            </div>
          </div>
          <div className="photo"></div>
        </div>
    </section>
  )
}
