import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Lodging from './pages/Lodging.jsx';
import About from './pages/About';
import Error404 from './pages/Error404.jsx';
import Header from './components/Utils/Header.jsx';
import Footer from './components/Utils/Footer.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <main className="page-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/lodging/:id' element={<Lodging />} />
          <Route path='/about' exact element={<About />} />
          <Route path='*' exact element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  </React.StrictMode>
);