import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <section className='footer'>
      <div className="mouse-follower-footer"></div>

      <div className='rrss row'>
       <a aria-label="personal Linkedin link" href="https://www.linkedin.com/in/tomas-aldeamoral/" target="_blank" rel="noopener noreferrer"><img alt="linkedin-logo" src="/icons/linkedin.svg" /></a>
       <a aria-label="personal Github link" href="https://github.com/TomasAldea" target="_blank" rel="noopener noreferrer"><img alt="github-logo" src="/icons/github.svg" /></a>
      </div>
      <span>Diseñado y creado por Tomás Aldea&nbsp;
        <FontAwesomeIcon icon={faCopyright} />&nbsp;2023
      </span>

    </section>
  )
}
