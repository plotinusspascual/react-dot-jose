import React from "react";
import { BsGithub, BsInstagram, BsTwitter, BsLinkedin  } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

function Footer(){

  const styles = {
    footer: {
      margin: 'auto'
    }
  }

  return(
    <div className="footer bg-dark text-center text-white" style={styles.footer}>
      <div class="container p-4 pb-0">
    <section class="mb-4">
      
      <a class="btn btn-outline-light btn-floating m-1" 
        href="https://www.instagram.com/plotinussp/" 
        role="button" target="_blank">
        <i class="fab fa-instagram-f"><BsInstagram /></i>
      </a>

      <a class="btn btn-outline-light btn-floating m-1" 
        href="mailto:plotinusspascual@gmail.com" 
        role="button" target="_blank">
        <i class="fab fa-twitter"><SiGmail /></i>
      </a>
      
      <a class="btn btn-outline-light btn-floating m-1" 
        href="https://www.linkedin.com/in/jose-plotinuss-pascual/" 
        role="button" target="_blank">
        <i class="fab fa-linkedin-in"><BsLinkedin /></i>
      </a>

      <a class="btn btn-outline-light btn-floating m-1" 
        href="https://github.com/plotinusspascual/" 
        role="button" target="_blank">
        <i class="fab fa-github"><BsGithub /></i>
      </a>

    </section>
  </div>


  <div class="text-center p-3">
    Made with ReactJS
  </div>
    </div>
  )
}

export default Footer;