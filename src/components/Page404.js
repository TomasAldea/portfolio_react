import React from 'react'
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <section className='section-404'>
        <div className='row'>
            <div className='img-container'></div>
            <div className='text-container'>
                <div className='title'>¡Vaya!</div>
                <div className='subtitle'>Parece que estamos solos...</div>

                <Link to="/" className='button1'>Volver a casa</Link>
            </div>
        </div>
    </section>  
  )
}
