import React, {useEffect, useContext} from 'react'
import Carousel from 'nuka-carousel/lib/carousel.js';
import { trabajos } from '../data/trabajos.js'
import { Link } from 'react-router-dom';
import { ProviderContext } from '../context/ProviderContext';
// TODO video mocka

export const Portafolio = () => {
  const {setOpenMenu} =  useContext(ProviderContext);

  let delay = 0;

  useEffect(() => {
    setOpenMenu(false);
  }, [])


  return (
    <section className='section-listproyectos'>
      <div className='carrousel-container' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <Carousel autoplayInterval={2500} autoplay={true} wrapAround={true} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
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
                      <a href={trabajo.url} className='url' target="_blank" rel="noopener noreferrer">{trabajo.url.replace('https://', '')}</a>
                      <div className='text'>{trabajo.descripcion}</div>

                      <Link className='button1' to={`/proyecto/${trabajo.id}`}>Ver proyecto</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </section>
  )
}
