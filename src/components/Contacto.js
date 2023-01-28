import React from 'react'

export const Contacto = () => {
  return (
    <section className='section-contacto'>
      <h1>
        Contacto
      </h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus felis vitae urna sodales, quis congue nulla convallis. Ut non justo quis enim aliquam varius at sit amet justo.
      </h2>

      <form className='contacto' action='mailto:tomas.sbd.5@gmail.com'>
        <ul>
          <li>
            <input type="text" placeholder='nombre' id="nombre" name="nombre" />
          </li>
          <li>
            
            <input type="text" placeholder='apellidos' id="apellidos" name="apellidos" />
          </li>
          <li>
            
            <input type="email" placeholder='email' id="email" name="email" />
          </li>
          <li>
            
            <textarea id="msg" placeholder='Motivo de contacto' name="Mensaje"></textarea>
          </li>
        </ul>
        <input type="submit" placeholder='Enviar' />
      </form>

    </section>
  )
}
