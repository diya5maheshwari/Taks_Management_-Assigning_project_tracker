import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from "./pages/Dashboard";
import AddTask from './pages/AddTask';


const App = () => {
  return (

    <div>
        <Navbar/>
       
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
         <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-task" element={<AddTask />} />
       </Routes>
     <Footer />
    </div>
   

    
 
    
  )
}

export default App