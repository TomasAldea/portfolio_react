import React, { useState,useEffect, useContext } from "react";
import { trabajos } from '../data/trabajos.js'
import { ProviderContext } from '../context/ProviderContext';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const ListadoProyectos = () => {
  const {setOpenMenu} =  useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);

  }, [])

  return (
    <div className='section-listproyectos'>
      <Carousel>
      {
        trabajos.map(trabajo => {
          return (
            <div className='card' key={trabajo.id} style={{backgroundImage: `url(/images/${trabajo.id}.jpg)`}}>
              <div className>{trabajo.nombre}</div>
              <div>{trabajo.tecnologias}</div>
              <div>{trabajo.url}</div>
              <div>{trabajo.descripcion}</div>
            </div>
          )
        })
      }
      </Carousel>
    </div>
  )
}