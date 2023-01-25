import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Curriculum } from '../components/Curriculum'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Contacto } from '../components/Contacto'
import { Servicios } from '../components/Servicios'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* header y navegacion */}
        <Header/>

        {/* contenido central */}
        <Routes>
            <Route path='/' element={<Navigate to="/inicio"/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/portafolio' element={<Portafolio/>}></Route>
            <Route path='/servicios' element={<Servicios/>}></Route>
            <Route path='/curriculum' element={<Curriculum/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>

        {/* footer */}
        <Footer/>
    </BrowserRouter>
  )
}
