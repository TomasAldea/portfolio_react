import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Curriculum } from '../components/Curriculum'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Contacto } from '../components/Contacto'
import { Skills } from '../components/Skills'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { DetalleProyecto } from '../components/DetalleProyecto'

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* header y navegacion */}
        <Header/>

        {/* contenido central */}
        <Routes>
            <Route path='/' element={<Navigate to="/inicio"/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/curriculum' element={<Curriculum/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/proyecto/:id' element={<DetalleProyecto/>}/>
            <Route path='*'element={<h1 className='heading'>Error 404</h1>}/>
        </Routes>

        {/* footer */}
        <Footer/>
    </BrowserRouter>
  )
}
