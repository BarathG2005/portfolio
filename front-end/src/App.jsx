import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Home from './components/home'
import About from './components/about'
import Projects from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'
function App() {

  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
