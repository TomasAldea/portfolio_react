import React, { useEffect, useContext } from 'react'
import { ProviderContext } from '../context/ProviderContext';

export const AboutMe = () => {
  const { setOpenMenu } = useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, [])



  return (
    <section className='section-aboutme' data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <div className='container row' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div className='col section'>
          <div className='title' data-aos-delay="300" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Experiencia</div>
          <div className='work border'>
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
          <div className={`work ${(window.innerWidth > 596) && "border"}`}>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>Jefe de equipo</span>
                  <span>Sodexo ibéria</span>
                </div>
                <span>2015 - 2020</span>
              </div>
              <ol className='description'>
                <li>
                  Gestión del personal.
                </li>
                <li>
                  Gestión de presupuestos y compras.
                </li>
                <li>
                  Presupuestar ofertas culinarias y gestionar eventos gastronómicos.
                </li>
                <li>
                  Reuniones de seguimiento semanales con cliente.
                </li>
              </ol>
            </div>
          </div>
          <div className='work'>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>"Full stack" en hostelería</span>
                  <span>Diversas empresas del sector</span>
                </div>
                <span>2006 - 2015</span>
              </div>
              <ol className='description'>
                <li>
                  Desde 2006, y de manera ininterrumpida, trabajé en distintas empresas del sector como cocinero y jefe de cocina.
                </li>
              </ol>
            </div>
          </div>
        </div >
        <div className='col section estudios'>
          <div className='title' data-aos-delay="300" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">Estudios</div>
          <div className='work'>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>Ironhack Barcelona tech boocamp </span>
                  <span>Barcelona</span>
                </div>
                <span>2020</span>
              </div>
              <ol className='description'>
                <li>
                  Bootcamp en desarrollo web full stack.
                </li>
                <li>
                  Javascript, MongoDB, Express, React, NodeJS, HTML y CSS.
                </li>
              </ol>
            </div>
          </div>
          <div className='work'>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>Escola d'hosteleria Joviat</span>
                  <span>Manrresa</span>
                </div>
                <span>2006 - 2009</span>
              </div>
              <ol className='description'>
                <li>
                  Ciclo formativo en restauración.
                </li>
              </ol>
            </div>
          </div>
        </div >
      </div>
    </section>
  )
}
