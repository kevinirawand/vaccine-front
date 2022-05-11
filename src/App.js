import React from 'react';
import Router from './router';
import Navbar from './components/Navbar'
// import { Link, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
