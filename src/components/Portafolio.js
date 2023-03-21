import React, {useEffect, useContext} from 'react'
/* import Carousel from 'nuka-carousel/lib/carousel.js'; */
import { trabajos } from '../data/trabajos.js';
import { trabajosEn } from '../data/trabajosEn.js';
import { ProviderContext } from '../context/ProviderContext';
import Slider from "react-slick";



export const Portafolio = () => {
  const {setOpenMenu,setMoreInfo,languaje} =  useContext(ProviderContext);

  let delay = 0;
  let data = (languaje) ? trabajos : trabajosEn;
  useEffect(() => {
    setOpenMenu(false);
  }, [])

  return (
      <div className='section-portfolio'>
        <Slider 
        autoplay={false}
        autoplaySpeed={4500}
        touchMove={true}
        pauseOnHover={true}
        infinite={true}
        speed={1000}
        draggable={true}
        >
          {
            data.map(function (trabajo, i) {
              delay = 0
              return (
                <div className="card row" key={trabajo.id}>
                  <div className='card-img' data-aos-duration="500" data-aos-delay="500" data-aos="zoom-in" style={{ backgroundImage: `url(/images/${trabajo.id}.webp)` }}></div>
                  <div className='card-info'>
                    <div className='container'>
                      <div className='title' data-aos-duration="500" data-aos-delay="500" data-aos="zoom-in">{trabajo.nombre}</div>
                      <div className='list'>

                        {
                          trabajo.tecnologias.map(function (tecnologia, index) {
                            delay += 250;
                            return <img alt={`logo-${tecnologia}`} key={index} data-aos-duration="500" data-aos-delay={delay} data-aos="zoom-in" className='icon' src={`/icons/${tecnologia}.svg`}></img>
                          }
                          )
                        }
                      </div>
                      <a aria-label={`Link to: ${trabajo.id} page`} href={trabajo.url} className='url' target="_blank" rel="noopener noreferrer">{trabajo.url.replace('https://', '')}</a>
                      <div className='text'>{trabajo.descripcion}</div>
                        {
                          (trabajo.longDescripcion) && <div className="button1" onClick={() => setMoreInfo(trabajo.longDescripcion)}>{(languaje) ? 'Más info' : 'More info'}</div>
                        }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider >
      </div>
  )
}
