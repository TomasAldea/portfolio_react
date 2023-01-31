import React, { useState,useEffect } from "react";
import { send } from "emailjs-com";
import AOS from "aos";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faTextWidth } from '@fortawesome/free-solid-svg-icons'

export const Contacto = () => {
  const [sendButton, setSendButton] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Tomas",
    message: "",
    reply_to: "",
  });

  useEffect(() => {
    AOS.init();
  }, [])

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
    <section className="section-contacto">
      <div className={`section-container ${sendSuccess ? "hide" : ""}`}>
        <div className="title" data-aos-delay="500" data-aos-duration="500" data-aos="fade-down">Contacto</div>
        <div className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus
          felis vitae urna sodales, quis congue nulla convallis. Ut non justo
          quis enim aliquam varius at sit amet justo.
        </div>

        <form className="form-contacto col" onSubmit={onSubmit}>
          <div className="input-group" data-aos-delay="500" data-aos-duration="500" data-aos="zoom-in">
            <label htmlFor="from_name">Nombre
              <FontAwesomeIcon icon={faUser} /> 
            </label>
            <input
              required
              type="text"
              placeholder="Nombre"
              id="nombre"
              name="from_name"
              onChange={handleChange}
              value={toSend.from_name}
            />
          </div>
          <div className="input-group" data-aos-delay="500" data-aos-duration="500" data-aos="zoom-in">
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
          <div className="input-group" data-aos-delay="500" data-aos-duration="500" data-aos="zoom-in">
            <label htmlFor="message">¿Cual es el motivo de contacto?
              <FontAwesomeIcon icon="fa-solid fa-text" />
            </label>
            <textarea
              required
              id="msg"
              placeholder="Motivo de contacto"
              name="message"
              onChange={handleChange}
              value={toSend.message}
            ></textarea>
          </div>
          <button className="submit button1">
            <div className={`static ${sendButton ? "hide" : ""}`}>Enviar</div>
            <div className={`typing ${sendButton ? "active" : ""}`}>
              Enviando...
            </div>
          </button>
        </form>
      </div>
        <div className={`send-success ${sendSuccess ? "show" : ""}`} data-aos-duration="300" data-aos="zoom-in">
          <img src="/icons/send-mail.svg" alt="email-icon"></img>
          <div className="text">
            ¡Gracias! tu email se ha enviado correctamente. <br></br> en breve me pondre en contacto contigo!
          </div>
          <Link to="/inicio" className="button1">
            Volver al inicio
          </Link>
        </div>
    </section>
  );
};
