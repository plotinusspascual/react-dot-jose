import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App(){
  return(
  <main className='text-gray-400 bg-gray-900 body-font'>
    <About />
  </main>    
  );
}

export default App;