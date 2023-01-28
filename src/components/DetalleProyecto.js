import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'


export const DetalleProyecto = () => {
    const [proyecto, setProyecto] = useState({})
    const params = useParams()

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id == params.id)
        setProyecto(proyecto[0]);
    }, [])
    
    return (
        <section className='section-detproyecto'>
            <a target="_blank" rel="noopener noreferrer" href={`https://${proyecto.url}`} key={proyecto.id}>
              <h2>{proyecto.nombre}</h2>
              <div className='mask'>
                <img src={`/images/${proyecto.id}.jpg`}></img>
              </div>
              <p>{proyecto.tecnologias}</p>
              <p>{proyecto.url}</p>
              <p>{proyecto.descripcion}</p>
            </a>
        </section>
    )
}
