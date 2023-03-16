import React, { useEffect, useContext } from "react";
import { ProviderContext } from '../context/ProviderContext';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Inicio = () => {
  const { setOpenMenu, languaje } = useContext(ProviderContext);

  useEffect(() => {
    setOpenMenu(false);
  }, [setOpenMenu])

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
          <div className="title" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-down">
            {(languaje) ? 'Hola, mi nombre és' : 'Hello, my name is'}
            <span>{(languaje) ? ' Tomás' : ' Tomás'}</span>
          </div>
          <div className="text" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-right">
            <p>
            {(languaje) ? 'Bienvenidos a mi portfolio.' : 'Welcome to my portfolio.'}
            </p>
            <p>
            {(languaje) ? 'Desde que mi padre me compro mi primer pentium 3, no he dejado nunca de trastear con la informática.' : 'Since my father bought me my first pentium 3, I have never stopped tinkering with computers.'}
            </p>
            <p>
            {(languaje) ? 'Es por esto, que hace unos años, y después de media vida como profesional de la hostelería (mi otra pasión), decidí hacer de mi hobbie, mi profesión.' : 'This is why, a few years ago, and after half my life as a hospitality professional (my other passion), I decided to make my hobby my profession.'}
            </p>
            <p>
            {(languaje) ? 'Además de la tecnología, me encanta el deporte y la música.' : 'Besides technology, I love sports and music.'}
            </p>
            <p>
            {(languaje) ? 'En la programación he descubierto un lugar donde saciar mi infinita curiosidad.' : 'In programming I have discovered a place to satisfy my infinite curiosity.'}
            </p>
          </div>

          <div className='btn-container' delay="500" data-aos-duration="2000" data-aos="fade-up">
            <div onClick={cvDownload} className='button1'>
            {(languaje) ? 'Currículum' : 'resume'}
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
