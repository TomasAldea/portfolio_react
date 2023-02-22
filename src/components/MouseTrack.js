import React, { useContext, useState } from 'react'
import { ProviderContext } from '../context/ProviderContext';

export const MouseTrack = () => {
    const {setOpenMenu,openMenu} =  useContext(ProviderContext);

    var isPortfolio = document.querySelector(".section-listproyectos");

    let interval = 0;
    let timer = 0;

    let mouseX = 0
    let mouseY = 0

    const openMenuTouch = () => {
        console.log('entra function');
        interval++;
        setOpenMenu(true);
    }

    onmousemove = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        document.querySelector('.mouse-follower-header').style.left = mouseX-50 + "px";
        document.querySelector('.mouse-follower-footer').style.left = mouseX-50 + "px";
    };

    if (window.innerWidth > 769) {
        onwheel = () => {
            interval++;
    
            if (interval >= timer) {
                timer += 15;
                document.querySelector('#wheel-window').style.left = mouseX + "px";
                document.querySelector('#wheel-window').style.top = mouseY + "px";
                document.querySelector('#wheel-window').classList.add("show");
    
                setTimeout(() => {
                    document.querySelector('#wheel-window').classList.remove("show");
                }, 2500);
            }
        };
    } else if (window.innerWidth < 769) {
        window.addEventListener('touchmove', openMenuTouch, false);
    } 

    return (
        <>
            <div id="wheel-window">
                En esta web no existen los scrolls...
            </div>
        </>
    )
}
