import React, { useState, useEffect, useContext } from "react";
import { ProviderContext } from '../context/ProviderContext';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Inicio = () => {
  const { setOpenMenu, languaje } = useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, [])

  const cvDownload = () => {
    fetch('CV_TomasAldea-2023.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV_TomasAldea-2023.pdf';
        alink.click();
      })
    })
  }
  
  return (
    <section className='section-inicio' data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <div className="row" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div className="description col">
          <div className="title" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-down">{(languaje) ? 'Hola, mi nombre es Tomás' : 'Hello, my name is Tomás Aldea'}</div>
          <div className="text" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-right">
            Soy una persona impulsada por los retos.<br></br>
            <br></br>
            hace unos años, y después de media vida como profesional de la hosteleria,
            decidí hacer de mi pasión y mi hobbie, mi profesión.<br></br>
            <br></br>
            En la programación encontré una forma de crecimiento personal continuo.
          </div>

          <div className='btn-container' delay="500" data-aos-duration="2000" data-aos="fade-up">
            <div onClick={cvDownload} className='button1'>Descargar cv
              <FontAwesomeIcon icon={faFileDownload} />
            </div>
          </div>
        </div>
        <div className="photo">
          <div className="img">
            <div className="fakebg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
