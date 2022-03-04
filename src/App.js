import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

function App(){
  return(
  <Container>
    <Navbar />
    <Header />
    <Row>
      <Col>
        <About />
        <Contact />
        <Projects />            
      </Col>
    </Row>
  </Container>    
  );
}

export default App;