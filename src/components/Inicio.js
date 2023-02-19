import React, { useEffect,useContext } from 'react'
import AOS from 'aos';
import { ProviderContext } from '../context/ProviderContext';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Inicio = () => {
  const {setOpenMenu,firstUserLoad} =  useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
    const shape = document.querySelector('#mainshape');
    shape.style.display = 'block';
    const shapeMobile = document.querySelector('#mainshapeMobile');
    shapeMobile.style.display = 'block';

  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (firstUserLoad) {
         AOS.init( {offset: 0} );
        const shapeMobile = document.querySelector('#loading-page');
        shapeMobile.style.display = 'none';
      } 

    }, 500);
  }, [firstUserLoad])
  
  return (
    <section className='section-inicio '>
      <div className='container'>
        <div className='col'>
          <div className='title-container col'>
            <div className='pre-title' data-aos-duration="2000" data-aos="fade-down">Hola, soy desarrollador web</div>
            <div className='title' data-aos-duration="500" data-aos-delay="1500" data-aos="zoom-in">Tomás Aldea</div>
          </div>
          <div className='personal-info'>
            <div className='row' data-aos-delay="1000" data-aos="zoom-in">
              <p className='strong'>Fecha de nacimiento:</p>
              <p> Abr 15, 1990 ({new Date().getFullYear() - 1991})</p>
            </div>
            <div className='row' data-aos-delay="1000" data-aos="zoom-in">
              <p className='strong'>Dirección:</p>
              <p> Covadonga 524, Sabadell, Barcelona</p>
            </div>
            <div className='row' data-aos-delay="1000" data-aos="zoom-in">
              <p className='strong'>E-mail:</p>
              <a href="mailto:tomas.sbd.5@gmail.com"> tomas.sbd.5@gmail.com</a>
            </div>
            <div className='row' data-aos-delay="1000" data-aos="zoom-in">
              <p className='strong'>Teléfono:</p>
              <a href='tel:690322287'>690322287</a>
            </div>
            <div className='btn-container' data-aos-duration="2000" data-aos="fade-up">
              <a className='button1'>Descargar cv 
              <FontAwesomeIcon icon={faFileDownload} /> 
              </a>
            </div>
          </div>
        </div >
      </div>
    </section>
  )
}
