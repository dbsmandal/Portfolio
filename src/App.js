import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Resume from './Component/Resume';
import Skills from './Component/Skills';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/>} />


        </Routes>
      </Router>
    </>
  )
}

export default App
