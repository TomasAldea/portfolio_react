import React, { useEffect, useContext } from 'react'
import { ProviderContext } from '../context/ProviderContext';

export const AboutMe = () => {
  const { setOpenMenu,languaje } = useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, [setOpenMenu])

  return (
    <section className='section-aboutme' data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <div className='container row' data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div className='col section'>
          <div className='title' data-aos-delay="300" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">{(languaje) ? 'Experiencia' : 'Experiencie'}</div>
          <div className='work border'>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>Full stack web developer </span>
                  <span>Dabasystem, Sabadell (Barcelona)</span>
                </div>
                <span>2021 - {(languaje) ? 'Actualidad' : 'Present'}</span>
              </div>
              <ol className='description'>  
                <li>
                  Full stack developer.
                </li>

                <li>
                {(languaje) ? 'Creación de manuales y formación a clientes.' : 'Creation of manuals and customer training.'}
                </li>

                <li>
                {(languaje) ? 'Seguimiento y mejora de las características WPO.' : 'Monitoring and improvement of WPO features.'}
                </li>

                <li>
                {(languaje) ? 'Apoyo técnico en mejoras y propuestas con cliente.' : 'Technical support in improvements and proposals with client.'}
                </li>
              </ol>
            </div>
          </div>
          <div className={`work ${(window.innerWidth > 596) && "border"}`}>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>{(languaje) ? 'Jefe de equipo.' : 'Team leader.'}</span>
                  <span>Sodexo ibéria</span>
                </div>
                <span>2015 - 2020</span>
              </div>
              <ol className='description'>
                <li>
                {(languaje) ? 'Gestión del personal.' : 'Staff management.'}
                </li>

                <li>
                {(languaje) ? 'Gestión de presupuestos y compras.' : 'Management of budgets and purchases.'}
                </li>

                <li>
                {(languaje) ? 'Presupuestar ofertas culinarias y gestionar eventos gastronómicos.' : 'Budget culinary offers and manage gastronomic events.'}
                </li>
                
                <li>
                {(languaje) ? 'Reuniones de seguimiento semanales con cliente.' : 'Weekly follow-up meetings with client.'}
                </li>
              </ol>
            </div>
          </div>
          <div className='work'>
            <div className='col'>
              <div className='info row'>
                <div className='col'>
                  <span>"Full stack" {(languaje) ? 'en hostelería' : 'in business restaurant'}</span>
                  <span>{(languaje) ? 'Diversas empresas del sector' : 'Various companies in the sector'}</span>
                </div>
                <span>2006 - 2015</span>
              </div>
              <ol className='description'>
                <li>
                {(languaje) ? 'Desde 2006, y de manera ininterrumpida, trabajé en distintas empresas del sector como cocinero y jefe de cocina.' : 'Since 2006, and without interruption, I have worked in different companies in the sector as chef and chef.'}
                </li>
              </ol>
            </div>
          </div>
        </div >
        <div className='col section estudios'>
          <div className='title' data-aos-delay="300" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">{(languaje) ? 'Estudios' : 'Studies'}</div>
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
                {(languaje) ? 'Bootcamp en desarrollo web full stack.' : 'Bootcamp in full stack web development.'}
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
                  {(languaje) ? 'Ciclo superior en restauración.' : 'Superior cycle in restoration.'}
                </li>
              </ol>
            </div>
          </div>
        </div >
      </div>
    </section>
  )
}
