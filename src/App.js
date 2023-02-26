import { useState } from 'react';
import './App.css';
import { LoadingPage } from './components/LoadingPage';
import { MouseTrack } from './components/MouseTrack';
import { MoreInfo } from './components/MoreInfo';
import { ProviderContext } from './context/ProviderContext';
import { MisRutas } from './router/MisRutas';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [firstUserLoad, setfirstUserLoad] = useState(false);
  const [loadPage, setLoadPage] = useState(false)
  const [moreInfo, setMoreInfo] = useState("")

  return (
    <>
      <ProviderContext.Provider value={{
        openMenu,setOpenMenu,
        firstUserLoad,setfirstUserLoad,
        loadPage, setLoadPage,
        moreInfo, setMoreInfo
        }}>
        <LoadingPage/>
        <MisRutas/>
        <MouseTrack/>
        <MoreInfo/>
      </ProviderContext.Provider>
    </>
  );
}

export default App;
