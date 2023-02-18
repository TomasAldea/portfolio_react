import { useState } from 'react';
import './App.css';
import { MouseTrack } from './components/MouseTrack';
import { ProviderContext } from './context/ProviderContext';
import { MisRutas } from './router/MisRutas';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <ProviderContext.Provider value={{openMenu,setOpenMenu}}>
        <MisRutas/>
        <MouseTrack/>
      </ProviderContext.Provider>
    </>
  );
}

export default App;
