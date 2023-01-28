import Carousel from 'nuka-carousel/lib/carousel.js';
import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos.js'


export const ListadoProyectos = () => {
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