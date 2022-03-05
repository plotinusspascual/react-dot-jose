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
    <div class="column mb-3 my-auto" style={styles.width}>
    <h1>Contact Info</h1>
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div class="mb-3" style={styles.width}>
      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" 
      placeholder="Send me a message and I'll get back to you as soon as I can" rows="3"></textarea>
    </div>
    <button type="button" class="btn btn-dark" style={styles.width}>Send</button>

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