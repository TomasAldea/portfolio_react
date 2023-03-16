import React, { useEffect, useContext, useState } from 'react'
import { ProviderContext } from '../context/ProviderContext';
import AOS from 'aos';

export const LoadingPage = () => {
    const { setfirstUserLoad, firstUserLoad } = useContext(ProviderContext);
    const [logo, setLogo] = useState(false);

    // TODO Se puede hacer esto sin tanto timeouts?
    useEffect(() => {
        
        setTimeout(() => {
            setfirstUserLoad(true);
            console.log('LoadingPage', firstUserLoad);
        }, 3000);
        // Cambiar gif de carga por logo png
        setTimeout(() => {           
            setLogo(true);
        }, 4300);
    }, [firstUserLoad, setfirstUserLoad])

    useEffect(() => {

        setTimeout(() => {
          // Elimina el loading-page cuando se actualiza el estado de firstUserLoad
          if (firstUserLoad) {
             AOS.init( {offset: 0} );
            const shapeMobile = document.querySelector('#loading-page');
            shapeMobile.style.display = 'none';
          } 
    
        }, 500);
      }, [firstUserLoad])

      // TODO problema con enlace a home (no esta dentro de router)
    return (
        <>
            <a id="load-gif" className={`main-a ${(firstUserLoad) && 'off'}`} href="https://tomasaldea.com/">
                <img className='main-logo' alt="main-logo" src={(logo) ? 'icons/main-logo.png' : 'loading-logo-vid/main.gif' } />
            </a>
            <div id="loading-page" className={` ${(firstUserLoad) && 'off'}`}>
            </div>
        </>
    )
}
