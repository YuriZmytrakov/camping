// import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import NucampLogo from './app/assets/img/logo.png';
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailsPage from './pages/CampsiteDetailsPage';
import './App.css'

// import CampsiteCard from './features/campsites/CampsiteCard.js';
import CampsiteCard from './features/campsites/CampsiteCard.js';
// import CampsitesList from './features/campsites/CampsitesList';
import CampsitesList from './features/campsites/CampsitesList.js';

import './App.css';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route
          path='directory/:campsiteId'
          element={<CampsiteDetailsPage />}
        />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;