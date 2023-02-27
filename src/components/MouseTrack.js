import React, { useContext } from 'react'
import TouchSweep from 'touchsweep'
import { ProviderContext } from '../context/ProviderContext';

export const MouseTrack = () => {
    const {setOpenMenu,openMenu} =  useContext(ProviderContext);

    let mouseX = 0
    let mouseY = 0

    onmousemove = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        document.querySelector('.mouse-follower-header').style.left = mouseX - 50 + "px";
        document.querySelector('.mouse-follower-footer').style.left = mouseX - 50 + "px";
    };

    
    const openMenuTouch = () => {
        var isPortfolio = document.querySelector(".carrousel-container");
        (!isPortfolio) && setOpenMenu(true);
    }

    if (window.innerWidth > 769) {
        // pasar de menu desktop
        onwheel = (event) => {
            var element = document.querySelector('.active-menu-desk');
            if (event.deltaY < 0) {
                element.parentNode.nextSibling?.childNodes[0].click();
            } else if (event.deltaY > 0) {
                element.parentNode.previousSibling?.childNodes[0].click();
            }
        };
    } else if (window.innerWidth < 769) {

        window.addEventListener('touchmove', openMenuTouch, false);

        // TODO esto mola pero en mobile falla
        /* const drag = document.getElementById('root');

        const data = {
            value: 1
        };

        const touchThreshold = 20;

        const touchSweepInstance = new TouchSweep(drag, data, touchThreshold);

        drag.addEventListener('swipeup', movePageNext, false);
        drag.addEventListener('swipeleft', movePageNext2, false);
        drag.addEventListener('swipedown', movePagePrev, false);
        drag.addEventListener('swiperight', movePagePrev2, false); */
    }


    /* function movePageNext() {
        var element = document.querySelector('.active-menu-mbl');
        element.parentNode.previousSibling?.childNodes[1].click();
    }
    function movePagePrev() {
        var element = document.querySelector('.active-menu-mbl');
        element.parentNode.nextSibling?.childNodes[1].click();
    }
    function movePageNext2() {
        var isPortfolio = document.querySelector(".carrousel-container");
        if (!isPortfolio) {
            var element = document.querySelector('.active-menu-mbl');
            element.parentNode.nextSibling?.childNodes[1].click();
        }
    }
    function movePagePrev2() {
        var isPortfolio = document.querySelector(".carrousel-container");
        if (!isPortfolio) {
            var element = document.querySelector('.active-menu-mbl');
            element.parentNode.previousSibling?.childNodes[1].click();
        }
    } */


    return (
        <>
        </>
    )
}
