import { useState } from 'react';
import './App.css';
import { Cortain } from './components/Cortain';
import { LoadingPage } from './components/LoadingPage';
import { MouseTrack } from './components/MouseTrack';
import { ProviderContext } from './context/ProviderContext';
import { MisRutas } from './router/MisRutas';
import AOS from 'aos';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [firstUserLoad, setfirstUserLoad] = useState(false);
  const [loadPage, setLoadPage] = useState(false)
  // 🚀temporal 
  AOS.init( {offset: 0} );

  return (
    <>
      <ProviderContext.Provider value={{
        openMenu,setOpenMenu,
        firstUserLoad,setfirstUserLoad,
        loadPage, setLoadPage
        }}>
        <LoadingPage/>
        {/* <Cortain/> */}
        <MisRutas/>
        <MouseTrack/>
      </ProviderContext.Provider>
    </>
  );
}

export default App;
