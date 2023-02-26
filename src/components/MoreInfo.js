import React, { useEffect,useContext } from 'react'
import { ProviderContext } from '../context/ProviderContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'

export const MoreInfo = () => {
  const {moreInfo,setMoreInfo} =  useContext(ProviderContext);

  useEffect(() => {
    console.log(moreInfo.dificultades);

  }, [moreInfo])

  return (
    <div onClick={(e) => (e.target === e.currentTarget) && setMoreInfo('')} className={`more-info ${(moreInfo) ? 'active' : ''}`}>
        <div className='text'>
        <div className="close" onClick={() => setMoreInfo('')}>
            <FontAwesomeIcon icon={faClose}/> 
        </div>
            <div className='dificultades'>
                <span>Dificultades</span>
                <ul>
                {
                   (moreInfo.dificultades) && moreInfo.dificultades.map(function (texto, i) { 
                        return <li id={`dificultad-${i}`}>{texto}</li>
                    }
                )}
                </ul>
            </div>
            <div className='aprendizaje'>
                <span>Aprendizaje</span>
                <ul>
                {
                   (moreInfo.aprendizaje) && moreInfo.aprendizaje.map(function (texto, i) { 
                        return <li id={`aprendizaje-${i}`}>{texto}</li>
                    }
                )}
                </ul>
            </div>
        </div>
    </div>
  )
}

