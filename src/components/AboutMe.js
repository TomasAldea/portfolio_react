import React, { useEffect, useContext } from 'react'
import { ProviderContext } from '../context/ProviderContext';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AboutMe = () => {
  const { setOpenMenu } = useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, [])



  return (
    <section className='section-aboutme'>
      <div className='container row' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div className='col section'>
          <div className='title'>Experiencia</div>
          <div className='work'>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>Full stack web developer </span>
                  <span>Dabasystem, Sabadell (Barcelona)</span>
                </div>
                <span>2021 - Actualidad</span>
              </div>
              <ol className='description'>
                <li>
                  Full stack developer.
                </li>
                <li>
                  Creación de manuales y formación a clientes.
                </li>
                <li>
                  Seguimiento y mejora de las características WPO.
                <li>
                  Apoyo técnico en mejoras y propuestas con cliente.
                </li>
                </li>
              </ol>
            </div>
          </div>
        </div >
        <div className='col section'>
          <div className='title'>Experiencia</div>
          <div className='work'>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>Full stack web developer </span>
                  <span>Dabasystem, Sabadell (Barcelona)</span>
                </div>
                <span>2021 - Actualidad</span>
              </div>
              <ol className='description'>
                <li>
                  Full stack developer.
                </li>
                <li>
                  Creación de manuales y formación a clientes.
                </li>
                <li>
                  Seguimiento y mejora de las características WPO.
                <li>
                  Apoyo técnico en mejoras y propuestas con cliente.
                </li>
                </li>
              </ol>
            </div>
          </div>
        </div >
      </div>
      <div className='btn-container' delay="500" data-aos-duration="2000" data-aos="fade-up">
        <a className='button1'>Descargar cv
          <FontAwesomeIcon icon={faFileDownload} />
        </a>
      </div>
    </section>
  )
}
