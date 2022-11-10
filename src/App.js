import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Skills from './Component/Skills';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route to="/" element={<Home/>} />
          <Route to="/projects" element={<Project/>} />
          <Route to="/skills" element={<Skills/>} />
          <Route to="/contact" element={<Contact/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
