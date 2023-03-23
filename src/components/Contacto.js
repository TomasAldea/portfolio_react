import React, { useState,useEffect,useContext } from "react";
import { send } from "emailjs-com";
import AOS from "aos";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser,faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { ProviderContext } from '../context/ProviderContext';

export const Contacto = () => {
  const [sendButton, setSendButton] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const {setOpenMenu, languaje} =  useContext(ProviderContext);


  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Tomas",
    message: "",
    reply_to: "",
  });

  useEffect(() => {
    setOpenMenu(false);
  }, [setOpenMenu])


  const onSubmit = (e) => {
    e.preventDefault();
    setSendButton(true);
    send(
      "service_xqn96xi", // service id
      "template_0hamr8l", // template id
      toSend,
      "9iD__X8bPeR42obVK" // user id
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSendButton(false);
        setSendSuccess(true);
        setTimeout(() => {
          AOS.init();
        }, 500);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setSendButton(false);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-contacto" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
      <div className={`section-container ${sendSuccess ? "hide" : ""}`} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <div className="title" data-aos-delay="500" data-aos-duration="1000" data-aos="fade-down">{(languaje) ? 'Contacto' : 'Contact'}</div>

        <div className='personal-info'>
            <div className='row' data-aos-delay="1000" data-aos="zoom-in">
              <p className='strong'>{(languaje) ? 'Fecha de nacimiento:' : 'Date of birth:'}</p>
              <p className='oneline'> {(languaje) ? 'Abr' : 'Apr'} 15, 1990 ({new Date().getFullYear() - 1991})</p>
            </div>
            <div className='row' data-aos-delay="1000" data-aos="zoom-in">
              <p className='strong'>E-mail:</p>
              <a aria-label="mailto" href="mailto:taldea.dev@gmail.com"> taldea.dev@gmail.com</a>
            </div>
            <div className='row' data-aos-delay="1000" data-aos="zoom-in">
              <p className='strong'>{(languaje) ? 'Teléfono:' : 'Telephone:'}</p>
              <a aria-label="phoneto" href='tel:690322287'>690322287</a>
            </div>

          </div>
        <form className="form-contacto col" onSubmit={onSubmit}>
          <div className="input-group" data-aos-delay="500" data-aos-duration="1000" data-aos="zoom-in">
            <label htmlFor="from_name">{(languaje) ? 'Nombre' : 'Name'}
              <FontAwesomeIcon icon={faUser} /> 
            </label>
            <input
              required
              type="text"
              placeholder={(languaje) ? 'Nombre' : 'Name'}
              id="nombre"
              name="from_name"
              onChange={handleChange}
              value={toSend.from_name}
            />
          </div>
          <div className="input-group" data-aos-delay="500" data-aos-duration="1000" data-aos="zoom-in">
            <label htmlFor="reply_to">Email
              <FontAwesomeIcon icon={faEnvelope} /> 
            </label>
            <input
              required
              type="email"
              placeholder="Email"
              id="email"
              name="reply_to"
              onChange={handleChange}
              value={toSend.reply_to}
            />
          </div>
          <div className="input-group" data-aos-delay="500" data-aos-duration="1000" data-aos="zoom-in">
            <label htmlFor="message">{(languaje) ? '¿Cual es el motivo de contacto?' : 'What is the reason for contact?'}
            <FontAwesomeIcon icon={faQuestionCircle} /> 
            </label>
            <textarea
              required
              id="msg"
              placeholder={(languaje) ? 'Motivo de contacto' : 'Reason for contact'}
              name="message"
              onChange={handleChange}
              value={toSend.message}
            ></textarea>
          </div>
          <button className="submit button1">
            <div className={`static ${sendButton ? "hide" : ""}`}>{(languaje) ? 'Enviar' : 'Send'}</div>
            <div className={`typing ${sendButton ? "active" : ""}`}>
            {(languaje) ? 'Enviando..' : 'Sending...'}.
            </div>
          </button>
        </form>
      </div>
        <div className={`send-success ${sendSuccess ? "show" : ""}`} data-aos-duration="300" data-aos="zoom-in">
          <div className="text">
          {(languaje) ? '¡Gracias! tu email se ha enviado correctamente.' : 'Thank you! your email has been sent correctly.'}  
          <br></br>
          {(languaje) ? 'en breve me pondré en contacto contigo!' : 'I will contact you shortly!'} 
          </div>
          <Link to="/" className="button1">
          {(languaje) ? 'Volver al inicio' : 'Back to top'} 
          </Link>
        </div>
    </section>
  );
};
