import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

function Footer(){

  const styles = {
    footer: {
      margin: 'auto',
      width: '100%',
      bottom: '0',
      paddingTop: '20px'
    }
  }

  return(

    <div className="footer bg-dark text-center text-white" style={styles.footer}>
      <div className="container p-4 pb-0">
    <section className="mb-4">
      <footer className="blockquote-footer">
        <a className="btn btn-outline-light btn-floating m-1" 
          href="https://www.instagram.com/plotinussp/" 
          role="button" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram-f"><BsInstagram /></i>
        </a>

        <a className="btn btn-outline-light btn-floating m-1" 
          href="mailto:plotinusspascual@gmail.com" 
          role="button" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"><SiGmail /></i>
        </a>
        
        <a className="btn btn-outline-light btn-floating m-1" 
          href="https://www.linkedin.com/in/jose-plotinuss-pascual/" 
          role="button" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"><BsLinkedin /></i>
        </a>

        <a className="btn btn-outline-light btn-floating m-1" 
          href="https://github.com/plotinusspascual/" 
          role="button" target="_blank" rel="noreferrer">
          <i className="fab fa-github"><BsGithub /></i>
        </a>        
      </footer>
     

    </section>
  </div>


  <div className="text-center p-3">
    Made with ReactJS
  </div>
    </div>
  )
}

export default Footer;