import React, { useEffect, useContext, useState } from 'react'
import { ProviderContext } from '../context/ProviderContext';

export const LoadingPage = () => {
    const { setfirstUserLoad, firstUserLoad } = useContext(ProviderContext);
    const [logo, setLogo] = useState(false);

    useEffect(() => {
        
        setTimeout(() => {
            setfirstUserLoad(true);
            console.log('LoadingPage', firstUserLoad);
        }, 3000);
        // Cambiar gif de carga por logo png
        setTimeout(() => {           
            setLogo(true);
        }, 4300);
    }, [])

    return (
        <>
            <img id="load-gif" className={`${(firstUserLoad) && 'off'}`} src={(logo) ? 'icons/main-logo.png' : 'loading-logo-vid/main.gif' } />
            <div id="loading-page" className={` ${(firstUserLoad) && 'off'}`}>
            </div>
        </>
    )
}
