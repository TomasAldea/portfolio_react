import React, { useEffect, useContext } from 'react'
import { ProviderContext } from '../context/ProviderContext';
import AOS from "aos";

export const Cortain = () => {
  const { setLoadPage,loadPage } = useContext(ProviderContext);

  useEffect(() => {
    console.log('entra Cortain ', loadPage);
  

   /*    setLoadPage(!loadPage); */

      setTimeout(() => {
        AOS.init({ offset: 0 });
        const cortain = document.querySelector('#cortain');
        cortain.style.display = 'none';

      }, 1000);
  }, [loadPage])
  
  return (
    <div id="cortain" className={`${loadPage ? "" : "active"}`}>
      <div className="left-cortain"></div>
      <div className="right-cortain"></div>
    </div>
  )
}
