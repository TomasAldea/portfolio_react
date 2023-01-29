import React, {useEffect, useState} from 'react'
import Carousel from 'nuka-carousel/lib/carousel.js';
import { trabajos } from '../data/trabajos.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

{/* <FontAwesomeIcon icon={faEnvelope} /> */}


export const Portafolio = () => {
  let delay = 0;

  useEffect(() => {
    AOS.init();
  }, [])

  const resetAos = () => {
    AOS.init();
  }

  return (
    <section className='section-listproyectos'>
      <Carousel beforeSlide={resetAos}>
        {
          trabajos.map(function (trabajo, i) {
            delay = 0
            let odd = (i % 2 == 0) ? "reverse" : "";
            return (
              <div className={`card row ${odd}`} key={trabajo.id}>
                <div className='card-img' data-aos-duration="500" data-aos-delay="500" data-aos="zoom-in" style={{ backgroundImage: `url(/images/${trabajo.id}.png)` }}></div>
                <div className='card-info'>
                  <div className='container'>
                    <div className='title' data-aos-duration="500" data-aos-delay="500" data-aos="zoom-in">{trabajo.nombre}</div>
                    <div className='list'>

                      {
                        trabajo.tecnologias.map(function (tecnologia, index) {
                          delay += 250;
                          return <img alt="project-img" key={index} data-aos-duration="500" data-aos-delay={delay} data-aos="zoom-in" className='icon' src={`/icons/${tecnologia}.svg`}></img>
                        }
                        )
                      }
                    </div>
                    <a href={trabajo.url} className='pre-title' target="_blank" rel="noopener noreferrer">{trabajo.url.replace('https://', '')}</a>
                    <div className='sub-title'>{trabajo.descripcion}</div>

                    <Link className='button1' to={`/proyecto/${trabajo.id}`}>Ver proyecto</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Carousel>
    </section>
  )
}
