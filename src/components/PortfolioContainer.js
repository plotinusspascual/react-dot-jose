import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PortfolioContainer(){
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}

