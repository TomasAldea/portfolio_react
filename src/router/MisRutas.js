import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { AboutMe } from '../components/AboutMe'
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Contacto } from '../components/Contacto'
import { Skills } from '../components/Skills'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Page404 } from '../components/Page404'

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
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='*'element={<Page404/>}/>
        </Routes>

        {/* footer */}
        <Footer/>
    </BrowserRouter>
  )
}
