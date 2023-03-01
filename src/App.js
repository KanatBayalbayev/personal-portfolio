import React from 'react'
import './App.css'
import About from './components/about/About'
import ContactMe from './components/contact/ContactMe'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
// import Projects from './components/projects/Projects'
import ProjectsInfo from './components/projects/ProjectsInfo'
import Qualification from './components/qualification/Qualification'
import ScrollUp from './components/scrollup/ScrollUp'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <ProjectsInfo/>
        <ContactMe/>
        
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  )
}

export default App
