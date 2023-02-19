import React, { useEffect, useContext } from 'react'
import { ProviderContext } from '../context/ProviderContext';

export const LoadingPage = () => {
    const { setfirstUserLoad, firstUserLoad } = useContext(ProviderContext);

    useEffect(() => {
        setTimeout(() => {
            setfirstUserLoad(true);
        }, 3000);
        setTimeout(() => {
            // TODO esto hay que refactorizarlo
            const loadingGif = document.querySelector('#load-gif');
            loadingGif.classList = 'hide';
            const headerLogo = document.querySelector('#logo');
            headerLogo.classList = 'active';
        }, 4300);
    }, [])

    return (
        <>
            <img id="load-gif" className={`${(firstUserLoad) && 'off'}`} src="loading-logo-vid/main.gif" />
            <div id="loading-page" className={` ${(firstUserLoad) && 'off'}`}>
            </div>
        </>
    )
}
