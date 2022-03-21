import React from "react";
import { BsGithub, BsInstagram, BsTwitter, BsLinkedin  } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export default function Contact(){
  const styles = {
    form: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    },
    width: {
      width: '500px'
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '30px'
    }
  };

  return (
    <section style={styles.form}>

    <div class="container" style={styles.icon}>
    <a class="btn btn-outline-dark btn-floating m-1" 
        href="https://www.instagram.com/plotinussp/" 
        role="button" target="_blank">
        <i class="fab fa-instagram-f"><BsInstagram /></i>
      </a>

      <a class="btn btn-outline-dark btn-floating m-1" 
        href="mailto:plotinusspascual@gmail.com" 
        role="button" target="_blank">
        <i class="fab fa-twitter"><SiGmail /></i>
      </a>
      
      <a class="btn btn-outline-dark btn-floating m-1" 
        href="https://www.linkedin.com/in/jose-plotinuss-pascual/" 
        role="button" target="_blank">
        <i class="fab fa-linkedin-in"><BsLinkedin /></i>
      </a>

      <a class="btn btn-outline-dark btn-floating m-1" 
        href="https://github.com/plotinusspascual/" 
        role="button" target="_blank">
        <i class="fab fa-github"><BsGithub /></i>
      </a>
    </div>

    </section>
  )
}